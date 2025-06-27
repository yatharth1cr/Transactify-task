import React from "react";
import "./AfricaMessage.css";
import africaMap from "../../assets/map-art.png";
import hma from "../../assets/hma-arch-logo.png";
import gazelle from "../../assets/gazalle-logo.png";
import projectDesign from "../../assets/proj-desi-sol-logo.png";
import woodpecker from "../../assets/woodpecker-inv-logo.png";
import lucky from "../../assets/lucky-cement-logo.png";

export default function AfricaMessage() {
  return (
    <div className="africa-section container py-5">
      <div className="row align-items-center">
        {/* Left: Africa Map Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={africaMap}
            alt="Africa Map"
            className="img-fluid africa-map"
          />
        </div>

        {/* Right: Text Bubble */}
        <div className="col-md-6">
          <div className="speech-bubble p-4">
            <h4 className="fw-bold text-white">
              Always keeping <span className="text-warning">Africa</span> first
            </h4>
            <p className="text-white mt-3">
              At Simba Developer, we prioritize doing the right things, the
              right way, for the right reasons. Guided by strong ethics, we aim
              to be a successful, sustainable, and responsible company in
              Tanzania. Integrity and transparency shape our decisions, while a
              culture of honesty fosters positive relationships with our
              customers, suppliers, and communities.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="partner-section text-center mt-5">
        <h5 className="fw-bold mb-4">Manufacturing & Fabrication Partners</h5>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          <img src={hma} alt="HMA Architects" className="partner-logo" />
          <img src={gazelle} alt="Gazelle" className="partner-logo" />
          <img
            src={projectDesign}
            alt="Project Design"
            className="partner-logo"
          />
          <img src={woodpecker} alt="Woodpecker" className="partner-logo" />
          <img src={lucky} alt="Lucky Cement" className="partner-logo" />
        </div>
      </div>
    </div>
  );
}
