// Portfolio.js
import React, { useState, useEffect } from "react";
import Breadcrumb from "./BreadCrumb";
// import "./Portfolio.css";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("Portfolio");
  const pages = ["Home", "Portfolio", "About", "Blog", "Contact"];
  return (
    <div className="portfolio-container">
      <Breadcrumb
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <section id="portfolio" className="intro-section">
        <h1 className="welcome-title">Portfolio</h1>
        <p className="intro-text">Check out some of my best projects...</p>
      </section>
    </div>
  );
};

export default Portfolio;
