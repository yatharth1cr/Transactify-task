import React from "react";
import "./ServicesOffered.css";
import residentialIcon from "../../assets/residential.png";
import commercialIcon from "../../assets/commercial.png";
import industrialIcon from "../../assets/industrial-park.png";
import civilIcon from "../../assets/civil.png";

const services = [
  { icon: residentialIcon, title: "Residential Projects" },
  { icon: commercialIcon, title: "Commercial Projects" },
  { icon: industrialIcon, title: "Industrial Projects" },
  { icon: civilIcon, title: "Civil Projects" },
];

export default function ServicesOffered() {
  return (
    <section className="services-wrapper py-5">
      <div className="container text-center">
        <div className="d-flex justify-content-center align-items-center service-row">
          <h2 className="highlight-text fw-bold">
            No compromise <br /> on product quality.
          </h2>
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-item px-4 ${i !== 0 ? "with-divider" : ""}`}
            >
              <img src={service.icon} alt={service.title} />
              <p className="service-title mt-2">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
