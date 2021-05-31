import React, { useContext } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { removeUserSession } from "../helpers/util";
import { store } from '../store/store';

const Navigation = () => {
  const { state, dispatch } = useContext(store);
  const logoutUser = () => {
    removeUserSession();
    dispatch({type : 'LOGIN_USER', payload : {isAuthenticated : false}})
  }

  return (
    <Navbar expand={"lg"} className={"nav-bg"}>
      <Navbar.Brand ><Link to={"/"}>St. Lucia Elections</Link></Navbar.Brand>
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
          { !state.isAuthenticated ?
            <>
              <Nav.Item>
                <Link to={"/register"} className="nav-link">Register</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={"/login"} className="nav-link">Login</Link>
              </Nav.Item>
            </> : null
          }
          { state.isAuthenticated ?
            <li className="nav-item">
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