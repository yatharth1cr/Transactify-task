import React from "react";
import "./Footer.css";
import footerLogo from "../../assets/footer-logo.png"; // Adjust path if needed

export default function Footer() {
  return (
    <footer className="footer-section text-white">
      <div className="container">
        <div className="row">
          {/* Left Half: 3 Columns */}
          <div className="col-md-6 d-flex justify-content-between flex-wrap footer-left">
            <div className="footer-col">
              <h6 className="fw-bold">PROJECTS UNDERTAKEN</h6>
              <ul>
                <li>RESIDENTIAL PROJECTS</li>
                <li>COMMERCIAL PROJECTS</li>
                <li>INDUSTRIAL PROJECTS</li>
                <li>CIVIL PROJECTS</li>
              </ul>
            </div>

            <div className="footer-col">
              <h6 className="fw-bold">ABOUT US</h6>
              <ul>
                <li>SERVICES OFFERED</li>
                <li>WHO WE ARE</li>
                <li>NEWS & MEDIA</li>
                <li>CONTACT US</li>
              </ul>
            </div>

            <div className="footer-col">
              <h6 className="fw-bold">TERMS AND USAGE</h6>
              <ul>
                <li>TERMS OF USE</li>
                <li>PRIVACY POLICY</li>
                <li>DISCLAIMER</li>
              </ul>
            </div>
          </div>

          {/* Right Half: Logo and Social + Text */}
          <div className="col-md-6 d-flex justify-content-between align-items-start footer-right">
            {/* Logo on the left */}
            <div className="footer-logo mb-3">
              <img src={footerLogo} alt="Simba Developers Logo" />
            </div>

            {/* Socials + copyright */}
            <div className="social-icons text-md-end">
              <div className="mb-3">
                <i className="fab fa-facebook me-3"></i>
                <i className="fab fa-twitter me-3"></i>
                <i className="fab fa-youtube me-3"></i>
                <i className="fab fa-instagram"></i>
              </div>
              <p className="mb-0 small">
                © 2024. Simba Developers.
                <br />
                All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
