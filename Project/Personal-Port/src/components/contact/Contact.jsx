import "./contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaDownload,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    {
      icon: <FaHome />,
      title: "Home",
      link: "#home",
    },
    {
      icon: <FaUser />,
      title: "About Me",
      link: "#about",
    },
    {
      icon: <FaBriefcase />,
      title: "Experience",
      link: "#experience",
    },
    {
      icon: <FaCode />,
      title: "Skills",
      link: "#skills",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Projects",
      link: "#projects",
    },
    {
      icon: <FaEnvelope />,
      title: "Contact",
      link: "#footer",
    },

  ];

  const contacts = [
    {
      icon: <FaEnvelope />,
      value: "udhayakumarravichandran@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      value: "+91 9092205834",
    },
    {
      icon: <FaMapMarkerAlt />,
      value: "Trichy, Tamil Nadu, India",
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Udhayakumar0503",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/udhayakumar-r-97589a1b8/",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:udhayakumarravichandran@gmail.com",
    },
  ];

  return (
    <footer className="footer" id="footer">

      <div className="footer-logo">
        <span>UK</span>
      </div>

      <div className="footer-container">

        {/* About */}

        <div className="footer-column">

          <h3>ABOUT ME</h3>

          <span className="line"></span>

          <div className="about-icon">
            <FaUser />
          </div>

          <p>
            I'm <strong>Udhayakumar</strong>, a Java Full Stack Developer
            passionate about building responsive, scalable and modern web
            applications with React, Spring Boot and MySQL.
          </p>
          <a href="/Udhayakumar_Resume.pdf" download className="a-resume">
            <button className="resume-btn">
              <FaDownload />
              Download Resume
            </button>
          </a>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <span className="line"></span>

          <ul className="quick-links">

            {quickLinks.map((item) => (
              <li key={item.title}>
                <a href={item.link}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            ))}

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>CONTACTS</h3>

          <span className="line"></span>

          {contacts.map((contact) => (
            <div className="contact-item" key={contact.value}>
              {contact.icon}
              <span>{contact.value}</span>
            </div>
          ))}

          <div className="location-box">

            <h4>Current Location</h4>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Chennai, Tamil Nadu</span>
            </div>

          </div>

        </div>

        {/* Social */}

        <div className="footer-column">

          <h3>GET IN TOUCH</h3>

          <span className="line"></span>

          <p>
            Feel free to connect with me through my social profiles.
          </p>

          <div className="social-icons">

            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                {social.icon}
              </a>
            ))}

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>© 2026 Udhayakumar. All Rights Reserved.</p>

        <p>
          Designed & Developed with ❤️ using <span>React</span>
        </p>

      </div>

    </footer>
  );
}

export default Footer;