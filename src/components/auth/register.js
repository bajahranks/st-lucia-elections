import React, { Component } from "react";
import AuthService from "../../services/auth";
import { Redirect } from "react-router-dom";

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
      redirect: false
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
    }).catch(e => { console.log(e) });
  }

  render(){
    // Redirect to login page
    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }
    return (
      <section className="text-center login">
        <main className="form-signin">
          <form onSubmit={this.registerUser}>
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                name="name"
                onChange={this.onChangeName}
              />
              {/*<label htmlFor="floatingInput">Email address</label>*/}
            </div>
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
            <div>
              <select className={"form-control"} id={"role"} name={"role"} onChange={this.onChangeRole}>
                <option defaultValue={""}>Choose Role</option>
                <option key={'Admin'} value={'Admin'}>Admin</option>
                <option key={'Staff'} value={'Staff'}>Staff</option>
                <option key={'Poll Worker'} value={'Poll Worker'}>Poll Worker</option>
              </select>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </form>
        </main>
      </section>
    )
  }
}