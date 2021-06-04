import React, { useContext } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {getToken, removeUserSession} from "../helpers/util";
import { store } from '../store/store';
import { useHistory } from "react-router";

const Navigation = () => {
  const { state, dispatch } = useContext(store);
  const history = useHistory();

  const logoutUser = () => {
    removeUserSession();
    dispatch({type : 'LOGIN_USER', payload : {isAuthenticated : false}})
    history.push({pathname: '/'});
  }

  return (
    <Navbar expand={"lg"} className={"nav-bg"}>
      <Navbar.Brand><Link to={"/"}>St. Lucia Elections</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={"justify-content-end"}>
        <Nav>
          <Nav.Item>
            <Link to={"/results"} className="nav-link">Results</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/parties"} className="nav-link">Parties</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/candidates"} className="nav-link">Candidates</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/districts"} className="nav-link">Districts</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/polling-stations"} className="nav-link">Polling Stations</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to={"/sections"} className="nav-link">Sections</Link>
          </Nav.Item>
          { !state.isAuthenticated && !getToken() ?
            <>
              <Nav.Item className={"left-divider"}>
                <Link to={"/register"} className="nav-link">Register</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={"/login"} className="nav-link">Login</Link>
              </Nav.Item>
            </> : null
          }
          { state.isAuthenticated || getToken() ?
            <li className="nav-item left-divider">
              <input type="button" className={"logout"} onClick={logoutUser} value="Log Out" />
            </li>
            : null
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;