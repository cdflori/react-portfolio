import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Navbar } from "react-router-dom";
import { Nav } from "react-router-dom;"

class Navigation extends Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light" id="nav-wrap">
            <Navbar.Brand href="#home"></Navbar.Brand>          
            <Nav className="navbar-nav mr-auto">
              <Nav.Link className="nav-link text-grey smoothscroll" to="#home">Home</Nav.Link>  
              <Nav.Link className="smoothscroll nav-link text-grey" to="#about">About</Nav.Link>
              <Nav.Link className="smoothscroll nav-link text-grey" to="#resume">Resume</Nav.Link>
              <Nav.Link className="smoothscroll nav-link text-grey" to="#portfolio">Works</Nav.Link>
              <Nav.Link className="smoothscroll nav-link text-grey" to="#testimonials">Testimonials</Nav.Link>
              <Nav.Link className="smoothscroll nav-link text-grey" to="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
      </>
    );
  }
}

export default Navigation;


