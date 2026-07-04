import "./Navbar.css";
import Profile from "../navbarprofile/Profile";
import { useState } from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaDownload, FaChevronDown, FaMoon } from "react-icons/fa";

function Navbar() {

  const NavHead = [
    { Name: "Home", Link: "#home", className: "home-link" },
    { Name: "About Me", Link: "#about", className: "about-link" },
    { Name: "Experience", Link: "#experience", className: "experience-link" },
    { Name: "Contact", Link: "#contact", className: "contact-link" },
    { Name: "Resume", Link: "#resume", className: "resume-link" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top ">

      <div className="container-fluid px-4 ">

        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <div className="logo">
            UK
          </div>
         
          <ul className="navbar-nav mx-auto gap-1">
            {NavHead.map((item) => (
              <li className="nav-item" key={item.Name}>
                <a className={`nav-link ${item.className}`} href={item.Link}>
                  {item.Name === "Home" && <FaHome className="nav-icon" />}
                  {item.Name === "About Me" && <FaUser className="nav-icon" />}
                  {item.Name === "Experience" && <FaBriefcase className="nav-icon" />}
                  {item.Name === "Contact" && <FaEnvelope className="nav-icon" />}
                  {item.Name === "Resume" && <FaDownload className="nav-icon" />}

                  <span>{item.Name}</span>
                </a>
              </li>
            ))}
          </ul>

              <div className="profile-section">
                <Profile />
              </div>

          


        </div>


      </div>

    </nav>
  );
}






export default Navbar;