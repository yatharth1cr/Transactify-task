import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome-section container">
      <div className="welcome-content">
        <div className="welcome-left">
          <h1 className="welcome-bg-text">welcome</h1>
          <h2 className="welcome-title">
            Making homes accessible <br /> to one and all in Tanzania.
          </h2>
          <p className="welcome-description">
            At Simba Developer, we prioritize doing the right things, the right
            way, for the right reasons. Guided by strong ethics, we aim to be a
            successful, sustainable, and responsible company in Tanzania.
            Integrity and transparency shape our decisions, while a culture of
            honesty fosters positive relationships with our customers,
            suppliers, and communities.
          </p>
          <div className="explore-link">
            continue exploring
            <div className="underline"></div>
          </div>
        </div>

        <div className="welcome-right">
          <div className="stat">
            <h3>2005</h3>
            <p>Year of Incorporation</p>
            <div className="underline orange"></div>
          </div>
          <div className="stat">
            <h3>700+</h3>
            <p>Motivated Employees</p>
            <div className="underline orange"></div>
          </div>
          <div className="stat">
            <h3>40+</h3>
            <p>Projects Executed</p>
            <div className="underline orange"></div>
          </div>
          <div className="stat">
            <h3>80+</h3>
            <p>High-tech Machinery</p>
            <div className="underline orange"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
