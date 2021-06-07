import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
// import MyNavbar from '../Navbar/MyNavbar';
import "./style.css";

export default function MainNavbar() {


  return (
    <Navbar collapseOnSelect expand="lg" className="top-header top">
        <h2 className="brand-title" href="#home">
          Christina Flores
        </h2>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="nav">
        <Nav.Link className="link" href="#about">ABOUT</Nav.Link>
        <Nav.Link className="link" href="#mywork">MY WORK</Nav.Link>
        <Nav.Link className="link" href="#contact">CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}
