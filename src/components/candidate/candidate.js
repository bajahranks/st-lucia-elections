import React, { Component } from "react";
import CandidateDataService from "../../services/candidate";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import {Col, Row, Card, Button, InputGroup, FormControl, Container} from "react-bootstrap";
import {getToken, getUserFromToken} from "../../helpers/util";

export default class Candidate extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveCandidates = this.retrieveCandidates.bind(this);
    this.removeAllCandidates = this.removeAllCandidates.bind(this);
    this.searchName = this.searchName.bind(this);
    this.deleteCandidate = this.deleteCandidate.bind(this);
    //this.formatDate = this.formatDate.bind(this);

    this.state = {
      candidates: [],
      searchName: "",
      isLoading: true
    };
  }

  // Load candidates when component is rendered.
  componentDidMount() {
    this.retrieveCandidates();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveCandidates() {
    CandidateDataService.getAll()
      .then(response => {
        this.setState({
          candidates: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  deleteCandidate(id) {
    CandidateDataService.delete(id, getToken())
      .then(() => {
        this.retrieveCandidates();
      }).catch(error => { console.log(error) });
  }

  removeAllCandidates() {
    CandidateDataService.deleteAll(getToken())
      .then(() => {
        this.refreshList();
      }).catch(e => { console.log(e) });
  }

  searchName() {
    CandidateDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          candidates: response.data
        });
      }).catch(e => { console.log(e) });
  }

  /*formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString();

    return (formattedDate);
  }*/

  render() {
    const { searchName, candidates } = this.state;
    const user = getUserFromToken();

    return (
      <Container>
        <Row>
          <Col md={'6'}>
            <h4>Candidate List</h4>
            { (user && user.role === 'Admin') &&
              <>
                <Link
                  to={"/add-candidate/"}
                  title={"Add Candidate"}
                  aria-label={"Add Candidate"}
                  className={"btn btn-primary mb-2 mr-half"}
                ><span className={"mr-half"}>Add Candidate</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                       className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                  </svg>
                </Link>
                <Button variant={"danger"} className={"mb-2 mr-half"} onClick={this.removeAllCandidates}>
                  Remove All
                </Button>
              </>
            }
            <InputGroup className={"mb-3"}>
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
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className={"g-3"}>
          <Loader
            type={"MutatingDots"}
            color={"Yellow"}
            secondaryColor={"Red"}
            visible={this.state.isLoading}
          />
          {candidates && candidates.map((candidate) => (
            <Col>
              <Card key={candidate._id}>
                <Card.Header>{candidate.name}</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p><strong>Sex:{" "}</strong>{ candidate.gender }</p>
                    <p><strong>Party:{" "}</strong>{ candidate.party.name }</p>
                    <p><strong>District:{" "}</strong>{ candidate.district.name }</p>
                    <p><strong>Comments:{" "}</strong>{ candidate.comments }</p>
                  </Card.Text>
                  { (user && (user.role === 'Admin' || user.role === 'Staff')) &&
                    <Link to={"/candidates/" + candidate._id} className={"btn btn-success mr-half"}>
                      Edit
                    </Link>
                  }
                  { (user && user.role === 'Admin') &&
                    <Button variant={"danger"} className={"mr-half"} onClick={() => this.deleteCandidate(candidate._id)}>
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
