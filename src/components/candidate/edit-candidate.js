import React, { Component } from "react";
import CandidateDataService from "../../services/candidate";
import DistrictDataService from "../../services/district";
import PartyDataService from "../../services/party";
import Loader from "react-loader-spinner";
import {Card, Col, Container, Form, Row, Alert, Button} from "react-bootstrap";
import {getToken, getUserFromToken} from "../../helpers/util";

export default class EditCandidate extends Component{
  constructor(props) {
    super(props);
    // Methods
    this.onChangeName = this.onChangeName.bind(this);
    //this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeParty = this.onChangeParty.bind(this);
    this.onChangeDistrict = this.onChangeDistrict.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.getCandidate = this.getCandidate.bind(this);
    this.updateCandidate = this.updateCandidate.bind(this);
    this.deleteCandidate = this.deleteCandidate.bind(this);
    //this.formatDate = this.formatDate.bind(this);

    // Defaults
    this.state = {
      currentCandidate: {
        id: null,
        name: "",
        dob: "",
        gender: "",
        party:"",
        district: "",
        comments: ""
      },
      parties: [],
      districts: [],
      message: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.getCandidate(this.props.match.params.id);
    this.retrieveDistricts();
    this.retrieveParties();
  }

  onChangeName(e) {
    const name = e.target.value;
    // Updates the state of the name value of the candidate.
    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        name: name
      }
    }));
  }

  /*onChangeDob(e) {
    const dob = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        dob: dob
      }
    }));
  }*/

  onChangeGender(e) {
    const gender = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        gender: gender
      }
    }));
  }

  onChangeParty(e) {
    const party = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        party: party
      }
    }));
  }

  onChangeDistrict(e) {
    const district = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        district: district
      }
    }));
  }

  onChangeComments(e) {
    const comments = e.target.value;

    this.setState(prevState => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        comments: comments
      }
    }));
  }

  retrieveParties() {
    PartyDataService.getAll()
      .then(response => {
        this.setState({
          parties: response.data,
          isLoading: false
        });
      }).catch(e => { console.log(e) });
  }

  retrieveDistricts() {
    DistrictDataService.getAll()
      .then(response => {
        this.setState({
          districts: response.data
        });
      }).catch(e => {
      console.log(e)
    });
  }

  getCandidate(id) {
    CandidateDataService.get(id)
      .then(response => {
        this.setState({
          currentCandidate: response.data
        });
      }).catch(error => {
      console.log(error);
    });
  }

  updateCandidate() {
    const currentCandidate = this.state.currentCandidate;

    CandidateDataService.update(currentCandidate._id, currentCandidate, getToken())
      .then(() => {
        this.setState({
          message: "The candidate was updated successfully!"
        });
      }).catch(error => { console.log(error); });
  }

  deleteCandidate() {
    CandidateDataService.delete(this.state.currentCandidate._id, getToken())
      .then(() => {
        this.props.history.push('/candidates')
      }).catch(error => { console.log(error); });
  }

  /*formatDate(date) {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const formattedDate = year + '-' + month + '-' + day;

    return (formattedDate);
  }*/

  render() {
    const { currentCandidate, parties, districts, message } = this.state;
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
            <Card bg={"light"}>
              <Card.Body>
                <fieldset>
                  <legend>Edit or delete candidate</legend>
                  <hr />
                  { message ? (
                    <Alert variant={"success"}>
                      <h4>{ message }</h4>
                    </Alert>
                  ): ("")}
                  {/* Name Field */}
                  <Form>
                    <Form.Group as={Row} className={"mb-3"} controlId={"name"}>
                      <Form.Label column sm="2">Name</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type={"text"}
                          name={"name"}
                          placeholder={"Candidate name"}
                          value={currentCandidate.name}
                          onChange={this.onChangeName}
                          required
                        />
                      </Col>
                    </Form.Group>
                    {/* Gender Field */}
                    <Form.Group as={Row} className={"mb-3"}>
                      <Form.Label column sm="2">Gender</Form.Label>
                      <Col sm="10">
                        <Form.Check
                          inline
                          label={"Male"}
                          type={"radio"}
                          id={"male"}
                          name={"gender"}
                          value={"Male"}
                          checked={currentCandidate.gender === "Male"}
                          onChange={this.onChangeGender}
                        />
                        <Form.Check
                          inline
                          label={"Female"}
                          type={"radio"}
                          id={"female"}
                          name={"gender"}
                          value={"Female"}
                          checked={currentCandidate.gender === "Female"}
                          onChange={this.onChangeGender}
                        />
                        <Form.Check
                          inline
                          label={"Other"}
                          type={"radio"}
                          id={"other"}
                          name={"gender"}
                          value={"Other"}
                          className={"custom-control-input"}
                          checked={currentCandidate.gender === "Other"}
                          onChange={this.onChangeGender}
                        />
                      </Col>
                    </Form.Group>
                    {/* Party Field */}
                    <Form.Group as={Row} className={"mb-3"} controlId={"party"}>
                      <Form.Label column sm="2">Party</Form.Label>
                      <Col sm="10">
                        <Form.Select name={"party"} aria-label={"Select Party"} onChange={this.onChangeParty}>
                          <option value={ currentCandidate.party._id }>{ currentCandidate.party.name }</option>
                          { parties && parties.map(party => (
                            <option key={party._id} value={ party._id }>{ party.name }</option>
                          ))
                          }
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    {/* District Field */}
                    <Form.Group as={Row} className={"mb-3"} controlId={"district"}>
                      <Form.Label column sm="2">District</Form.Label>
                      <Col sm="10">
                        <Form.Select aria-label={"Select District"} name={"district"} onChange={this.onChangeDistrict}>
                          <option value={ currentCandidate.district._id }>{ currentCandidate.district.name }</option>
                          { districts && districts.map(district => (
                            <option key={district._id} value={ district._id }>{ district.name }</option>
                          ))
                          }
                        </Form.Select>
                      </Col>
                    </Form.Group>
                    {/* Comments Field */}
                    <Form.Group as={Row} className={"mb-3"} controlId={"comments"}>
                      <Form.Label column sm="2">Comments</Form.Label>
                      <Col sm="10">
                        <Form.Control
                          as={"textarea"}
                          name={"comments"}
                          placeholder={"Say something about the candidate"}
                          style={{ height: '100px'}}
                          onChange={this.onChangeComments}
                          defaultValue={currentCandidate.comments}
                        />
                      </Col>
                    </Form.Group>
                    {/* Buttons */}
                    { (user && (user.role === 'Admin' || user.role === 'Staff')) &&
                      <Button variant={"success"} className="mr-half" onClick={this.updateCandidate} >
                        Edit
                      </Button>
                    }
                    { (user && user.role === 'Admin') &&
                      <Button variant={"danger"} className="mr-half" onClick={() => this.deleteCandidate()}>
                        Delete
                      </Button>
                    }
                    <a className={"btn btn-warning"} href={"/"}>Cancel</a>
                  </Form>

                  {/* DOB Field @todo: Find a datepicker that works with react states or replace with text field. */}
                  {/*<div className={"form-group row"}>
              <label htmlFor={"dob"} className={"col-lg-3 col-form-label"}>DOB</label>
              <div>
                <input
                  type={"date"}
                  className={"form-control"}
                  id={"dob"}
                  name={"dob"}
                  value={this.formatDate(currentCandidate.dob)}
                  onChange={this.onChangeDob}
                />
              </div>
            </div>*/}
                </fieldset>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}