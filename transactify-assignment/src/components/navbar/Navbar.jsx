import React from "react";
import { Nav } from "react-bootstrap";
import logo from "../../assets/simba-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="custom-navbar d-flex justify-content-between align-items-center w-100">
      <img src={logo} alt="Simba Logo" className="navbar-logo" />

      <Nav className="nav-links fw-bold text-uppercase">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Projects Undertaken</Nav.Link>
        <Nav.Link href="#">Services Offered</Nav.Link>
        <Nav.Link href="#">Who We Are</Nav.Link>
        <Nav.Link href="#">New & Media</Nav.Link>
        <Nav.Link href="#">Contact Us</Nav.Link>
      </Nav>
    </div>
  );
};

export default Navbar;
