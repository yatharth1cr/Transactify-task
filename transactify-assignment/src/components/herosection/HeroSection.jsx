import React from "react";
import "./HeroSection.css";
import banner from "../../assets/hero-banner.jpg";
import Navbar from "../navbar/Navbar";

const HeroSection = () => {
  return (
    <section className="hero-section text-white">
      {/* Background Image */}
      <img
        src={banner}
        alt="Construction Hero Banner"
        className="hero-banner"
      />

      {/* Overlayed Navbar */}
      <div className="hero-overlay">
        <Navbar />
      </div>
    </section>
  );
};

export default HeroSection;
