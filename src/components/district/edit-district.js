import React, { Component } from "react";
import DistrictDataService from "../../services/district";
import Loader from "react-loader-spinner";
import {getToken, getUserFromToken} from "../../helpers/util";
import {Alert, Button, Card, Col, Container, Form, Row} from "react-bootstrap";

export default class EditDistrict extends Component{
  constructor(props) {
    super(props);
    // Methods
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getDistrict = this.getDistrict.bind(this);
    this.updateDistrict = this.updateDistrict.bind(this);
    this.deleteDistrict = this.deleteDistrict.bind(this);

    // Defaults
    this.state = {
      currentDistrict: {
        id: null,
        code: "",
        name: "",
        description: ""
      },
      message: "",
      isLoading: true
    };
  }

  componentDidMount() {
    this.getDistrict(this.props.match.params.id);
  }

  onChangeCode(e) {
    const code = e.target.value;
    // Updates the state of the code value of the district.
    this.setState(prevState => ({
      currentDistrict: {
        ...prevState.currentDistrict,
        code: code
      }
    }));
  }

  onChangeName(e) {
    const name = e.target.value;
    // Updates the state of the name value of the district.
    this.setState(prevState => ({
      currentDistrict: {
        ...prevState.currentDistrict,
        name: name
      }
    }));
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState(prevState => ({
      currentDistrict: {
        ...prevState.currentDistrict,
        description: description
      }
    }));
  }

  getDistrict(id) {
    DistrictDataService.get(id)
      .then(response => {
        this.setState({
          currentDistrict: response.data,
          isLoading: false
        });
      }).catch(error => {
        console.log(error);
      });
  }

  updateDistrict() {
    const currentDistrict = this.state.currentDistrict;

    DistrictDataService.update(currentDistrict._id, currentDistrict, getToken())
      .then(() => {
        this.setState({
          message: "The district was updated successfully!"
        });
      }).catch(error => {
        console.log(error);
      });
  }

  deleteDistrict() {
    DistrictDataService.delete(this.state.currentDistrict._id, getToken())
      .then(() => {
        this.props.history.push('/districts')
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    const { currentDistrict, message } = this.state;
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
              <Card.Body className={"bg-light"}>
                <fieldset>
                  <legend>Edit or delete district</legend>
                  <hr />
                  { message ? (
                    <Alert variant={"success"}>
                      <h4>{ message }</h4>
                    </Alert>
                  ): ("")}
                  {/* Code Field */}
                  <Form.Group as={Row} className={"mb-3"} controlId="code">
                    <Form.Label column sm="2">Code</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        name={"code"}
                        placeholder={"District code"}
                        value={currentDistrict.code}
                        onChange={this.onChangeCode}
                        required
                      />
                    </Col>
                  </Form.Group>
                  {/* Name Field */}
                  <Form.Group as={Row} className={"mb-3"} controlId="name">
                    <Form.Label column sm="2">Name</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        name={"name"}
                        placeholder={"District name"}
                        value={currentDistrict.name}
                        onChange={this.onChangeName}
                        required
                      />
                    </Col>
                  </Form.Group>
                  {/* Description Field */}
                  <Form.Group as={Row} className={"mb-3"} controlId={"description"}>
                    <Form.Label column sm="2">Comments</Form.Label>
                    <Col sm="10">
                      <Form.Control
                        as={"textarea"}
                        name={"description"}
                        placeholder={"District description"}
                        style={{ height: '100px'}}
                        onChange={this.onChangeDescription}
                        value={currentDistrict.description}
                      />
                    </Col>
                  </Form.Group>
                  {/* Buttons */}
                  { (user && (user.role === 'Admin' || user.role === 'Staff')) &&
                  <Button variant={"success"} className="mr-half" onClick={this.updateDistrict} >
                    Edit
                  </Button>
                  }
                  { (user && user.role === 'Admin') &&
                  <Button variant={"danger"} className="mr-half" onClick={() => this.deleteDistrict()}>
                    Delete
                  </Button>
                  }
                  <a className={"btn btn-warning"} href={"/"}>Cancel</a>
                </fieldset>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}