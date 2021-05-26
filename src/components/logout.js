import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {getToken, removeUserSession} from "../helpers/util";

export default class Logout extends Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);

    this.state = {
      redirect: false
    };
  }

  logoutUser() {
    removeUserSession();

    // redirect to home page
    this.setState({ redirect: true });
  }

  render(){
    // Redirect to home page
    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }

    if (getToken()) {
      return (<section>
        <input type="button" className={"logout"} onClick={this.logoutUser} value="Log Out" />
      </section>)
    }
  }
}