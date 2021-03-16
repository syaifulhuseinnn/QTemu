import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import AppTitle from "./atoms/app_title";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="secondary" expand="lg">
        <Navbar.Brand href="#home" className="text-light">
          <AppTitle className="h5">QTemu</AppTitle>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav>
            <Nav.Link href="#home" className="text-light mx-md-4">
              Create Meetup
            </Nav.Link>
            <Nav.Link href="#link" className="text-light mx-md-4">
              Explore
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login" className="text-light">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
