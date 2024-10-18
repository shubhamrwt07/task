import React, { useState, useEffect } from "react";
// import "./Breadcrucmb.css";

const Breadcrumb = ({ currentPage, setCurrentPage, pages }) => {
  const [breadcrumbPages, setBreadcrumbPages] = useState([currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const section = document.getElementById(page.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const index = pages.indexOf(currentPage);
    const updatedPages = pages.slice(0, index + 1);
    setBreadcrumbPages(updatedPages);
  }, [currentPage, pages]);

  return (
    <div className="breadcrumb">
      {breadcrumbPages.map((page, index) => (
        <span key={page} className="breadcrumb-item">
          <span
            className={currentPage === page ? "active" : ""}
            onClick={() => handlePageChange(page)}
            style={{
              cursor: "pointer",
              color: currentPage === page ? "black" : "#007bff",
            }}
          >
            {page}
          </span>
          {index < breadcrumbPages.length - 1 && (
            <span className="breadcrumb-separator"> &gt; </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
