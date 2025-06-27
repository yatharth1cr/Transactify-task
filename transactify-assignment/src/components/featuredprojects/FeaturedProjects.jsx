import React from "react";
import "./FeaturedProjects.css";
import proj1 from "../../assets/icon-project-landing.jpg";
import proj2 from "../../assets/icon-project-landing.jpg";
import proj3 from "../../assets/icon-project-landing.jpg";
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
    <section className="featured-section py-5">
      <div className="container">
        <h2 className="featured-heading">Featured Projects</h2>
        <p className="featured-subheading">
          Completion of projects in a time frame, continuous human resources
          development, and a strong commitment to client satisfaction.
        </p>

        <div className="row gx-4 gy-4">
          {projects.map((p, i) => (
            <div className="col-12 col-md-6 col-xl-3" key={i}>
              <div
                className="project-card"
                style={{ backgroundImage: `url(${p.image})` }}
              >
                <div className="project-overlay">
                  <div className="project-category">{p.category}</div>
                  <div className="project-info">
                    <h5>{p.title}</h5>
                    <p>{p.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
