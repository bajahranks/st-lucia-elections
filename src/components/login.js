import React, { Component } from "react";
import AuthService from "../services/auth";
import { Redirect } from "react-router-dom";
import { setUserSession } from "../helpers/util";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.loginUser = this.loginUser.bind(this);

    this.state = {
      email: '',
      password: '',
      redirect: false
    };
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

  loginUser(e) {
    // Prevent browser from refreshing
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    AuthService.login(user).then(response => {
      // save token in session
      setUserSession(response.data);

      // redirect to home page
      this.setState({ redirect: true });

    }).catch(e => { console.log(e) });
  }

  render(){
    // Redirect to home page
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }

    return (
      <section className="text-center login">
        <main className="form-signin">
          <form onSubmit={this.loginUser}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                name="email"
                onChange={this.onChangeEmail}
              />
              {/*<label htmlFor="floatingInput">Email address</label>*/}
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                onChange={this.onChangePassword}
              />
              {/*<label htmlFor="floatingPassword">Password</label>*/}
            </div>

            {/*<div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>*/}
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </form>
        </main>
      </section>
    )
  }
}