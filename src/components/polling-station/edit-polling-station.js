import React, { Component } from "react";
import PollingStationDataService from "../../services/polling-station";
import DistrictDataService from "../../services/district";
import Loader from "react-loader-spinner";
import {getToken, getUserFromToken} from "../../helpers/util";
import {Alert, Button, Card, Col, Container, Form, Row} from "react-bootstrap";

export default class EditPollingStation extends Component{
  constructor(props) {
    super(props);
    // Methods
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.getPollingStation = this.getPollingStation.bind(this);
    this.updatePollingStation = this.updatePollingStation.bind(this);
    this.deletePollingStation = this.deletePollingStation.bind(this);
    this.retrieveDistricts = this.retrieveDistricts.bind(this);

    // Defaults
    this.state = {
      currentPollingStation: {
        id: null,
        code: "",
        name: "",
        district: ""
      },
      districts: [],
      message: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.getPollingStation(this.props.match.params.id);
    this.retrieveDistricts();
  }

  onChangeCode(e) {
    const code = e.target.value;
    // Updates the state of the code value of the polling station.
    this.setState(prevState => ({
      currentPollingStation: {
        ...prevState.currentPollingStation,
        code: code
      }
    }));
  }

  onChangeName(e) {
    const name = e.target.value;
    // Updates the state of the name value of the polling station.
    this.setState(prevState => ({
      currentPollingStation: {
        ...prevState.currentPollingStation,
        name: name
      }
    }));
  }

  onChangeDistrict(e) {
    const district = e.target.value;

    this.setState(prevState => ({
      currentPollingStation: {
        ...prevState.currentPollingStation,
        district: district
      }
    }));
  }

  getPollingStation(id) {
    PollingStationDataService.get(id)
      .then(response => {
        this.setState({
          currentPollingStation: response.data
        });
      }).catch(error => {
      console.log(error);
    });
  }

  retrieveDistricts() {
    DistrictDataService.getAll()
      .then(response => {
        this.setState({
          districts: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  updatePollingStation() {
    const currentPollingStation = this.state.currentPollingStation;

    PollingStationDataService.update(currentPollingStation._id, currentPollingStation, getToken())
      .then(() => {
        this.setState({
          message: "The Polling Station was updated successfully!"
        });
      }).catch(error => {
      console.log(error);
    });
  }

  deletePollingStation() {
    PollingStationDataService.delete(this.state.currentPollingStation._id, getToken())
      .then(() => {
        this.props.history.push('/pollingStations')
      }).catch(error => {
      console.log(error);
    });
  }

  render() {
    const { currentPollingStation, districts, message } = this.state;
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
            <Card className={"bg-light"}>
              <Card.Body>
                <fieldset>
                  <legend>Edit or delete Polling Station</legend>
                  <hr />
                  { message ? (
                    <Alert variant={"success"}>
                      <h4>{ message }</h4>
                    </Alert>
                  ): ("")}
                  {/* Code Field */}
                  <Form>
                    <Form.Group as={Row} className={"mb-3"} controlId={"code"}>
                      <Form.Label column sm="2">Code</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          name={"code"}
                          placeholder={"Polling Station code"}
                          value={currentPollingStation.code}
                          onChange={this.onChangeCode}
                          required
                        />
                      </Col>
                    </Form.Group>
                    {/* Name Field */}
                    <Form.Group as={Row} className={"mb-3"} controlId={"name"}>
                      <Form.Label column sm="2">Name</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          name={"name"}
                          placeholder={"PollingStation name"}
                          value={currentPollingStation.name}
                          onChange={this.onChangeName}
                          required
                        />
                      </Col>
                    </Form.Group>
                    {/* District Field */}
                    <Form.Group as={Row} className={"mb-3"} controlId={"district"}>
                      <Form.Label column sm="2">District</Form.Label>
                      <Col sm="10">
                        <Form.Select name={"district"} onChange={this.onChangeDistrict}>
                          <option value={ currentPollingStation.district._id }>{ currentPollingStation.district.name }</option>
                          { districts && districts.map(district => (
                            <option key={ district._id } value={ district._id }>{ district.name }</option>
                            ))
                          }
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    {/* Buttons */}
                    { (user && (user.role === 'Admin' || user.role === 'Staff')) &&
                    <Button variant={"success"} className="mr-half" onClick={this.updatePollingStation} >
                      Edit
                    </Button>
                    }
                    { (user && user.role === 'Admin') &&
                    <Button variant={"danger"} className="mr-half" onClick={() => this.deletePollingStation()}>
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