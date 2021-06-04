import React, { useState, useContext } from "react";
import AuthService from "../../services/auth";
import { Redirect } from "react-router-dom";
import { setUserSession } from "../../helpers/util";
import { store } from '../../store/store';
import {Alert, Button, Col, Form, Row} from "react-bootstrap";

const Login = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [message, setMessage] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onChangeMessage = (errorMessage) => {
    setMessage(errorMessage);
  }

  const loginUser = (e) => {
    // Prevent browser from refreshing
    e.preventDefault();

    const user = {
      email: email,
      password: password
    }

    AuthService.login(user).then(response => {
      // assign global context
      dispatch({type : 'LOGIN_USER', payload : {isAuthenticated : true}})

      // save token in session
      setUserSession(response.data);

      // redirect to home page
      setRedirect(true );

    }).catch(error => { onChangeMessage(error.response.data) });
  }

  // Redirect to home page
  if (redirect) {
    return (<Redirect to={"/"} />);
  } else {
    return (
      <section className="login">
        <main className="form-signin">
          <Form onSubmit={loginUser}>
            <h1 className="h3 mb-3 text-center fw-normal">Please sign in</h1>
            { message ?
              <Alert variant={"danger"}>
                <h4>{message.error}</h4>
              </Alert>
            : ("")}
            <Form.Group as={Row} className="mb-3" controlId={"email"}>
              <Form.Label column sm="3">Email</Form.Label>
              <Col sm="9">
                <Form.Control
                  type={"email"}
                  placeholder={"name@example.com"}
                  name={"email"}
                  value={email}
                  onChange={onChangeEmail}
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
                  value={password}
                  onChange={onChangePassword}
                />
              </Col>
            </Form.Group>
            <Button variant={"primary"} className="w-100" type="submit">Sign in</Button>
          </Form>
        </main>
      </section>
    );
  }
}

export default Login;