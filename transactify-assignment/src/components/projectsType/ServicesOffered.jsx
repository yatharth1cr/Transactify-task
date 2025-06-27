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
    <section className="services-wrapper py-5 ">
      <div className="container text-center flex flex-row justify-content-center">
        <h2 className="highlight-text fw-bold mb-4">
          No compromise on product quality.
        </h2>
        <div className="row justify-content-center">
          {services.map((service, i) => (
            <div key={i} className="col-6 col-md-3 mb-4">
              <div className="service-item">
                <img src={service.icon} alt={service.title} className="mb-2" />
                <p className="service-title">{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
