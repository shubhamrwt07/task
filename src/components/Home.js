import React, { useState, useEffect } from "react";
import Breadcrumb from "./BreadCrumb";
import "./Home.css";
import "animate.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const pages = ["Home", "Portfolio", "About", "Blog", "Contact"];
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        console.log("Fetching visit count...");
        const response = await fetch("http://localhost:5000/api/visit");
        const data = await response.json();
        setVisitCount(data.visitCount);
      } catch (error) {
        console.error("Error fetching visit count:", error);
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section animate__animated animate__fadeIn">
          <h1
            className="hero-title animate__animated animate__fadeInDown"
            style={{ fontWeight: "bolder" }}
          >
            Welcome to My Stunning Portfolio
          </h1>
          <p className="hero-description animate__animated animate__fadeInUp">
            Discover my projects, creativity, and passion for web development.
            This is my first react page. Let’s explore the world of web
            development together!
          </p>
          <button
            className="hero-button animate__animated animate__zoomIn"
            style={{ fontWeight: "bolder" }}
          >
            Explore Now
          </button>
        </section>

        {/* Carousel */}
        <div
          style={{
            marginTop: "30px",
          }}
          id="carouselExampleControls"
          className="carousel slide animate__animated animate__fadeIn"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ width: "100%", height: "500px" }}
            >
              <img
                src="https://media.istockphoto.com/id/670688480/photo/green-tea-plantations-munnar-kerala-india.jpg?s=1024x1024&w=is&k=20&c=dOqP3WxoMTBHiCvOyu09s0c9PKfZoBB4W9lX9swTP7E="
                className="image d-block w-100"
                alt="First slide"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="carousel-item"
              style={{ width: "100%", height: "500px" }}
            >
              <img
                src="https://media.istockphoto.com/id/1347273687/photo/beautiful-tea-plantations-in-hills-near-munnar-kerala-india.jpg?s=1024x1024&w=is&k=20&c=6ucilo4p2foRn6Rdxc6MCgLgtc3ROoWIdhbkmh0IXz0="
                className="image d-block w-100"
                alt="Second slide"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="carousel-item"
              style={{ width: "100%", height: "500px" }}
            >
              <img
                src="https://media.istockphoto.com/id/1246366598/photo/a-scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-allepey-town-located-in.jpg?s=1024x1024&w=is&k=20&c=iC0UkqCnz4yuhEyw2-Dwabhu7CDI_ay47cdQfuBSQ0c="
                className="image d-block w-100"
                alt="Third slide"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="carousel-item"
              style={{ width: "100%", height: "500px" }}
            >
              <img
                src="https://media.istockphoto.com/id/1357901540/photo/wooden-boat-in-backwater.jpg?s=1024x1024&w=is&k=20&c=i9hNCW5Uzbhn1x4nCJRtmYGKmPuSoY2Ib0k2fxANjO0="
                className="image d-block w-100"
                alt="Fourth slide"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div
              className="carousel-item"
              style={{ width: "100%", height: "500px" }}
            >
              <img
                src="https://media.istockphoto.com/id/1203206251/photo/periyar-river-view-munambam-kerala-india.jpg?s=1024x1024&w=is&k=20&c=CLN-XT_OMgQmnnSCEoY3t0C6zBqR0ylDlJ-10qL6th8="
                className="image d-block w-100"
                alt="Fourth slide"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden" style={{ fontWeight: "bolder" }}>
              Next
            </span>
          </button>
        </div>
        <section className="skills-section animate__animated animate__fadeIn">
          <h1 className="skills-title navvv" style={{ fontWeight: "bolder" }}>
            Skills & Expertise
          </h1>
          <div className="skills-grid">
            <div className="skill-item animate__animated animate__fadeInLeft">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                alt="HTML5"
              />
              <p style={{ fontWeight: "bolder" }}>HTML5</p>
            </div>
            <div className="skill-item animate__animated animate__fadeInLeft">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                alt="CSS3"
              />
              <p style={{ fontWeight: "bolder" }}>CSS3</p>
            </div>
            <div className="skill-item animate__animated animate__fadeInRight">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png"
                alt="JavaScript"
              />
              <p style={{ fontWeight: "bolder" }}>JavaScript</p>
            </div>
            <div className="skill-item animate__animated animate__fadeInRight">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                alt="React"
              />
              <p style={{ fontWeight: "bolder" }}>React.js</p>
            </div>
          </div>
        </section>
        <section className="services-section animate__animated animate__fadeIn">
          <h1 className="services-title" navvv style={{ fontWeight: "bolder" }}>
            Services
          </h1>
          <div className="services-grid">
            <div className="service-ite">
              <img
                style={{ width: "40%" }}
                src="https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Front-End Development"
              />
              <p className="navvv" style={{ fontWeight: "bolder" }}>
                Front-End Development
              </p>
            </div>
            <div className="service-item" style={{}}>
              <img
                style={{ width: "40%" }}
                src="https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Back-End Development"
              />
              <p className="navvv" style={{ fontWeight: "bolder" }}>
                Back-End Development
              </p>
            </div>
            <div className="service-ite">
              <img
                style={{ width: "40%" }}
                src="https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.jpg?s=1024x1024&w=is&k=20&c=Y0nH3YzWfMt4Asf4KyNUCJPReUbpJGOakBjsV4JwIoU="
                alt="Web Design"
              />
              <p className="navvv" style={{ fontWeight: "bolder" }}>
                Web Design
              </p>
            </div>
            <div className="service-item">
              <img
                style={{ width: "40%" }}
                src="https://images.unsplash.com/photo-1643513208377-8a62b7a2240f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Software Development"
              />
              <p className="navvv" style={{ fontWeight: "bolder" }}>
                Software Development
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section animate__animated animate__fadeInUp">
          <h1
            className="testimonials-title navvv"
            style={{ fontWeight: "bolder" }}
          >
            What My Clients Say
          </h1>
          <div className="testimonials-grid">
            <div className="testimonial-item">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="Client 1"
              />
              <p className="navvv" style={{ fontWeight: "bolder" }}>
                "Amazing work! Helped me build my portfolio and it turned out
                perfect!"
              </p>
              <p className="navvv" style={{ fontWeight: "bolder" }}>
                - John Doe
              </p>
            </div>
            <div className="testimonial-item">
              <img
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt="Client 2"
              />
              <p className="navvv" style={{ fontWeight: "bolder" }}>
                "Professional and timely service. Would highly recommend!"
              </p>
              <p className="navvv" style={{ fontWeight: "bolder" }}>
                - Jane Smith
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section animate__animated animate__fadeIn">
          <h1 className="contact-title navvv" style={{ fontWeight: "bolder" }}>
            Contact Me
          </h1>
          <form className="contact-form">
            <input
              type="text"
              placeholder="Name"
              className="contact-input animate__animated animate__fadeInUp"
            />
            <input
              type="email"
              placeholder="Email"
              className="contact-input animate__animated animate__fadeInUp"
            />
            <input
              placeholder="Message"
              className="contact-input animate__animated animate__fadeInUp"
            ></input>
            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </section>

        {/* Visit Count */}
        <p className="intro-text">
          This site has been visited{" "}
          <span style={{ fontWeight: "bold" }}>{visitCount}</span> times!
        </p>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Home;
