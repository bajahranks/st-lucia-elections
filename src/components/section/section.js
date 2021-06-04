import React, { Component } from "react";
import SectionDataService from "../../services/section";
import { Link } from "react-router-dom";
import {getToken, getUserFromToken} from "../../helpers/util";
import Loader from "react-loader-spinner";
import {Button, Card, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveSections = this.retrieveSections.bind(this);
    this.removeAllSections = this.removeAllSections.bind(this);
    this.searchName = this.searchName.bind(this);
    this.deleteSection = this.deleteSection.bind(this);

    this.state = {
      sections: [],
      searchName: "",
      isLoading: true
    };
  }

  // Load sections when component is rendered.
  componentDidMount() {
    this.retrieveSections();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveSections() {
    SectionDataService.getAll()
      .then(response => {
        this.setState({
          sections: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  deleteSection() {
    SectionDataService.delete(this.state.currentSection._id, getToken())
      .then(() => {
        this.refreshList();
      }).catch(error => { console.log(error) });
  }

  removeAllSections() {
    SectionDataService.deleteAll(getToken())
      .then(() => {
        this.refreshList();
      }).catch(e => { console.log(e) });
  }

  searchName() {
    SectionDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          sections: response.data
        });
      }).catch(e => { console.log(e) });
  }

  render() {
    const { searchName, sections, currentSection, currentIndex } = this.state;
    const user = getUserFromToken();

    return (
      <Container>
        <Row>
          <Col md={"6"}>
            <h4>Section List</h4>
            <InputGroup className="mb-3">
              <FormControl
                placeholder={"Search by Name"}
                aria-label={"Search by Name"}
                value={searchName}
                onChange={this.onChangeSearchName}
              />
              <Button variant={"outline-secondary"} onClick={this.searchName}>
                Search
              </Button>
            </InputGroup>
            {(user && user.role === 'Admin') &&
            <>
              <Link
                to={"/add-section/"}
                title={"Add Section"}
                aria-label={"Add Section"}
                className={"btn btn-primary mb-2 mr-half"}
              ><span className={"mr-half"}>Add Section</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                </svg>
              </Link>
              <Button variant={"danger"} className={"mb-2 mr-half"} onClick={this.removeAllSections}>
                Remove All
              </Button>
            </>
            }
          </Col>
        </Row>

        <Row xs={1} md={2} lg={4} className={"g-4"}>
          <Loader
            type={"MutatingDots"}
            color={"Yellow"}
            secondaryColor={"Red"}
            visible={this.state.isLoading}
          />
          { sections && sections.map((section, index) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    <p><strong>Code:{" "}</strong>{ section.name }</p>
                    <p><strong>Polling Station:{" "}</strong>{ section.pollingStation.name }</p>
                  </Card.Text>
                  { (user && (user.role === 'Admin' || user.role === 'Staff')) &&
                  <Link to={"/sections/" + section._id} className={"btn btn-success mr-half"}>
                    Edit
                  </Link>
                  }
                  { (user && user.role === 'Admin') &&
                  <Button variant={"danger"} className={"mr-half"} onClick={() => this.deleteSection(section._id)}>
                    Delete
                  </Button>
                  }
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
