import React, { Component } from "react";
import SectionDataService from "../../services/section";
import PollingStationDataService from "../../services/polling-station";
import Loader from "react-loader-spinner";
import {getToken, getUserFromToken} from "../../helpers/util";
import {Alert, Button, Card, Col, Container, Form, Row} from "react-bootstrap";

export default class EditSection extends Component{
  constructor(props) {
    super(props);
    // Methods
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePollingStation = this.onChangePollingStation.bind(this);
    this.getSection = this.getSection.bind(this);
    this.updateSection = this.updateSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);

    // Defaults
    this.state = {
      currentSection: {
        id: null,
        name: "",
        pollingStation: ""
      },
      pollingStations: [],
      message: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.getSection(this.props.match.params.id);
    this.retrievePollingStations();
  }

  onChangeName(e) {
    const name = e.target.value;
    // Updates the state of the name value of the section.
    this.setState(prevState => ({
      currentSection: {
        ...prevState.currentSection,
        name: name
      }
    }));
  }

  onChangePollingStation(e) {
    const pollingStation = e.target.value;

    this.setState(prevState => ({
      currentSection: {
        ...prevState.currentSection,
        pollingStation: pollingStation
      }
    }));
  }

  getSection(id) {
    SectionDataService.get(id)
      .then(response => {
        this.setState({
          currentSection: response.data
        });
      }).catch(error => {
      console.log(error);
    });
  }

  retrievePollingStations() {
    PollingStationDataService.getAll()
      .then(response => {
        this.setState({
          pollingStations: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  updateSection() {
    const currentSection = this.state.currentSection;

    SectionDataService.update(currentSection._id, currentSection, getToken())
      .then(() => {
        this.setState({
          message: "The section was updated successfully!"
        });
      }).catch(error => {
      console.log(error);
    });
  }

  deleteSection() {
    SectionDataService.delete(this.state.currentSection._id, getToken())
      .then(() => {
        this.props.history.push('/sections')
      }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const { currentSection, pollingStations, message } = this.state;
    const user = getUserFromToken();

    return (
      <Container className={"mt-3"}>
        <Row className={"justify-content-md-center"}>
          <Col md={"8"}>
            <Loader
              type={"MutatingDots"}
              color={"Yellow"}
              secondaryColor={"Red"}
              visible={this.state.isLoading}
            />
            <Card className={"card card-body bg-light"}>
              <Card.Body>
                <fieldset>
                  <legend>Edit or delete section</legend>
                  <hr />
                  { message ? (
                    <Alert variant={"success"}>
                      <h4>{ message }</h4>
                    </Alert>
                  ): ("")}
                  {/* Name Field */}
                  <Form>
                    <Form.Group as={Row} className={"mb-3"} controlId={"name"}>
                      <Form.Label column sm="3">Name</Form.Label>
                      <Col sm="9">
                        <Form.Control
                          name={"name"}
                          placeholder={"Section name"}
                          value={currentSection.name}
                          onChange={this.onChangeName}
                          required
                        />
                      </Col>
                    </Form.Group>
                    {/* PollingStation Field */}
                    <Form.Group as={Row} className={"mb-3"} controlId={"pollingStation"}>
                      <Form.Label column sm="3">PollingStation</Form.Label>
                      <Col sm={"9"}>
                        <Form.Select name={"pollingStation"} onChange={this.onChangePollingStation}>
                          <option value={ currentSection.pollingStation._id }>{ currentSection.pollingStation.name }</option>
                          { pollingStations && pollingStations.map(pollingStation => (
                              <option key={ pollingStation._id } value={ pollingStation._id }>{ pollingStation.name }</option>
                            ))
                          }
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    {/* Buttons */}
                    { (user && (user.role === 'Admin' || user.role === 'Staff')) &&
                    <Button variant={"success"} className="mr-half" onClick={this.updateSection} >
                      Edit
                    </Button>
                    }
                    { (user && user.role === 'Admin') &&
                    <Button variant={"danger"} className="mr-half" onClick={() => this.deleteSection()}>
                      Delete
                    </Button>
                    }
                    <a className={"btn btn-warning"} href={"/"}>Cancel</a>
                  </Form>
                </fieldset>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}