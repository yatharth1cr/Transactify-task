import React from "react";
import "./Partners.css";

import hma from "../../assets/hma-arch-logo.png";
import gazelle from "../../assets/gazalle-logo.png";
import projectDesign from "../../assets/proj-desi-sol-logo.png";
import woodpecker from "../../assets/woodpecker-inv-logo.png";
import lucky from "../../assets/lucky-cement-logo.png";

const partnerLogos = [hma, gazelle, projectDesign, woodpecker, lucky];

export default function Partners() {
  return (
    <div className="partner-section text-center mt-5 container">
      <h5 className="fw-bold">Manufacturing & Fabrication Partners</h5>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {partnerLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Partner ${index + 1}`}
            className="partner-logo"
          />
        ))}
      </div>
    </div>
  );
}
