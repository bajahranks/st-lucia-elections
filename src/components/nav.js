import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import {getToken, removeUserSession, getUserFromToken} from "../helpers/util";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);

    this.state = {
      redirect: false,
      isAuthenticated: true
    };
  }

  logoutUser() {
    removeUserSession();

    // redirect to home page
    this.setState({
      redirect: true,
      isAuthenticated: false
    });
  }

  render(){

    return (
      <nav className="navbar navbar-expand navbar-light nav-bg">
        <a href="/" className="navbar-brand">
          St. Lucia Elections
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/results"} className="nav-link">
              Results
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/parties"} className="nav-link">
              Parties
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/candidates"} className="nav-link">
              Candidates
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/districts"} className="nav-link">
              Districts
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/polling-stations"} className="nav-link">
              Polling Stations
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/sections"} className="nav-link">
              Sections
            </Link>
          </li>
          { !getToken() ?
            <>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            </>
            : null
          }
          { this.state.redirect && <Redirect to={"/login"}/> }
          { getToken() ?
            <li className="nav-item">
              <input type="button" className={"logout"} onClick={this.logoutUser} value="Log Out" />
            </li>
            : null
          }
        </div>
      </nav>
    )
  }
}