import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
  render() {
      return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Citizen Connect</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">Organizations</Nav.Link>
              <Nav.Link href="/">Events</Nav.Link>
            </Nav>
            <Nav.Link href="/">Login</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      );
  }
}

export default Header;
