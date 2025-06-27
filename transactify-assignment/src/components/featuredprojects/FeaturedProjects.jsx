import React from "react";
import "./FeaturedProjects.css";
import proj1 from "../../assets/project-landing.jpg";
import proj2 from "../../assets/project-landing01.jpg";
import proj3 from "../../assets/landing.jpg";
import proj4 from "../../assets/icon-project-landing.jpg";

const projects = [
  {
    category: "RESIDENTIAL",
    title: "Blue Ocean Residency",
    location: "Zanzibar",
    image: proj1,
  },
  {
    category: "RESIDENTIAL",
    title: "Champwani Island",
    location: "Zanzibar",
    image: proj2,
  },
  {
    category: "CIVIL",
    title: "Restoration of Old Town & Market",
    location: "Darajani, Zanzibar",
    image: proj3,
  },
  {
    category: "COMMERCIAL",
    title: "Africab Business Park",
    location: "Dar Es Salaam, Tanzania",
    image: proj4,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-section container">
      <div className="welcome-bg-text">Featured Projects</div>
      <h2 className="featured-heading"></h2>
      <p className="featured-subheading">
        Completion of projects in a time frame, continuous human resources
        development, and a strong commitment to client satisfaction.
      </p>

      <div className="row g-4 justify-content-evenly">
        {projects.map((project, index) => (
          <div
            className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            key={index}
          >
            <div
              className="project-card"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="project-overlay">
                <div className="project-category">{project.category}</div>
                <div className="project-info">
                  <h5>{project.title}</h5>
                  <p>{project.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
