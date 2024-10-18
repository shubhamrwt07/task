// About.js
import React, { useState, useEffect } from "react";
import Breadcrumb from "./BreadCrumb";
// import "./About.css";

const About = () => {
  const [currentPage, setCurrentPage] = useState("About");

  const pages = ["Home", "Portfolio", "About", "Blog", "Contact"];

  return (
    <div className="about-container">
      {/* Breadcrumb navigation */}
      <Breadcrumb
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Content */}
      <section id="about" className="intro-section">
        <h1 className="welcome-title">About Me</h1>
        <p className="intro-text">
          I am a web developer passionate about building...
        </p>
        {/* More content */}
      </section>

      {/* Other sections */}
    </div>
  );
};

export default About;
