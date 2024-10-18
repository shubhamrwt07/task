// Portfolio.js
import React, { useState, useEffect } from "react";
import Breadcrumb from "./BreadCrumb";
// import "./Portfolio.css";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("Blog");

  const pages = ["Home", "Portfolio", "About", "Blog", "Contact"];

  return (
    <div className="portfolio-container">
      {/* Breadcrumb navigation */}
      <Breadcrumb
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Content */}
      <section id="portfolio" className="intro-section">
        <h1 className="welcome-title">blog</h1>
        <p className="intro-text">Check out some of my best projects...</p>
        {/* More content */}
      </section>

      {/* Other sections */}
    </div>
  );
};

export default Portfolio;
