import React, { Component } from "react";
import AuthService from "../../services/auth";
import { Redirect } from "react-router-dom";
import {Alert, Button, Col, Form, Row} from "react-bootstrap";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.registerUser = this.registerUser.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      role: '',
      redirect: false,
      message: ''
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value
    });
  }

  onChangeMessage = (errorMessage) => {
    this.setState({
      message: errorMessage
    });
  }

  registerUser(e) {
    // Prevent browser from refreshing
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      role: this.state.role
    }

    AuthService.register(user).then(response => {
      this.setState({
        redirect: true
      });
    }).catch(error => { this.onChangeMessage(error.response.data) });
  }

  render(){
    // Redirect to login page
    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }
    return (
      <section className="login">
        <main className="form-register">
          <Form onSubmit={this.registerUser}>
            <h1 className="h3 mb-3 text-center fw-normal">Please Register</h1>
            { this.state.message ?
              <Alert variant={"danger"}>
                <h4>{this.state.message.error}</h4>
              </Alert>
              : ("")}
            <Form.Group as={Row} className="mb-3" controlId={"name"}>
              <Form.Label column sm="3">Full Name</Form.Label>
              <Col sm="9">
                <Form.Control
                  placeholder="Enter your full name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId={"email"}>
              <Form.Label column sm="3">Email</Form.Label>
              <Col sm="9">
                <Form.Control
                  type={"email"}
                  placeholder={"name@example.com"}
                  name={"email"}
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId={"password"}>
              <Form.Label column sm="3">Password</Form.Label>
              <Col sm="9">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className={"mb-3"} controlId={"role"}>
              <Form.Label column sm="3">Role</Form.Label>
              <Col sm={"9"}>
                <Form.Select name={"role"} onChange={this.onChangeRole}>
                  <option defaultValue={""}>Choose Role</option>
                  <option key={'Admin'} value={'Admin'}>Admin</option>
                  <option key={'Staff'} value={'Staff'}>Staff</option>
                  <option key={'Poll Worker'} value={'Poll Worker'}>Poll Worker</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Button variant={"primary"} className="w-100" type="submit">Register</Button>
          </Form>
        </main>
      </section>
    )
  }
}