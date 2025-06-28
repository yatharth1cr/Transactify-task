import React from "react";
import "./AfricaMessage.css";
import africaMap from "../../assets/map-art.png";

export default function AfricaMessage() {
  return (
    <div className="africa-message container my-5 py-4 d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
      <img src={africaMap} alt="Africa Map" className="africa-map" />
      <div className="speech-box">
        <h2 className="speech-heading">
          Always keeping <br />
          <span>Africa</span> <em>first</em>
        </h2>
        <p className="speech-text">
          At Simba Developer, we prioritize doing the right things, the right
          way, for the right reasons. Guided by strong ethics, we aim to be a
          successful, sustainable, and responsible company in Tanzania.
          Integrity and transparency shape our decisions, while a culture of
          honesty fosters positive relationships with our customers, suppliers,
          and communities.
        </p>
      </div>
    </div>
  );
}
