import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbr">
      <div className="container-fluid">
        <a className="navbar-brand navvv" href="#">
          PORTFOLIO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Centered Navbar Items */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active navvv"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link navvv"
                aria-current="page"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navvv" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navvv" aria-current="page" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link navvv"
                aria-current="page"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navvv" aria-current="page" to="/excel">
                Excel
              </Link>
            </li>
          </ul>
          {/* Right-Aligned Social Media Icons */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link navvv"
                href="https://wa.me/7982000252"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navvv"
                href="https://t.me/YOUR_TELEGRAM_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navvv"
                href="https://www.instagram.com/shubham.rwt.04"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link navvv"
                href="https://www.linkedin.com/in/Shubham Rwt"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
