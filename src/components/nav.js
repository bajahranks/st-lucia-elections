import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand={"lg"} className={"nav-bg"}>
      <Navbar.Brand href="/">St. Lucia Elections</Navbar.Brand>
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
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;