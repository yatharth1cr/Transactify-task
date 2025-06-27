import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section text-white pt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">PROJECTS UNDERTAKEN</h6>
            <ul>
              <li>RESIDENTIAL PROJECTS</li>
              <li>COMMERCIAL PROJECTS</li>
              <li>INDUSTRIAL PROJECTS</li>
              <li>CIVIL PROJECTS</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">ABOUT US</h6>
            <ul>
              <li>SERVICES OFFERED</li>
              <li>WHO WE ARE</li>
              <li>NEWS & MEDIA</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">TERMS AND USAGE</h6>
            <ul>
              <li>TERMS OF USE</li>
              <li>PRIVACY POLICY</li>
              <li>DISCLAIMER</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center pt-4">
          <div className="social-icons mb-2">
            <i className="fab fa-facebook me-3"></i>
            <i className="fab fa-twitter me-3"></i>
            <i className="fab fa-youtube me-3"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <p className="mb-0">© 2024. Simba Developers. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
