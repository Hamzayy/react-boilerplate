import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.scss";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar className="container" collapseOnSelect expand="lg">
          <Navbar.Brand className="ml-3">React Project</Navbar.Brand>
          
            <Nav className="ml-auto">
              <NavDropdown
                title="John Doe"
                id="collasible-nav-dropdown"
                alignRight={true}
              >
                <NavDropdown.Item
                  onClick={() => {
                    localStorage.setItem("user", false);
                    this.props.history.push('/')
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
        
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Header);
