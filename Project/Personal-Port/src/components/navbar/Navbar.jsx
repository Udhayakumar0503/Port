  import "./Navbar.css";
  import Profile from "../navbarprofile/Profile";

  import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaEnvelope,
    FaDownload,
    FaTools 
  } from "react-icons/fa";

  function Navbar() {

    const NavHead = [
      {
        name: "Home",
        link: "#home",
        icon: <FaHome />,
      },
      {
        name: "About Me",
        link: "#about",
        icon: <FaUser />,
      },
      {
        name: "Experience",
        link: "#experience",
        icon: <FaBriefcase />,
      },
      {
        name: "Contact",
        link: "#footer",
        icon: <FaEnvelope />,
      },

      {
        name: "Skills",
        link: "#skills",
        icon: <FaTools  />,
      },
      {
        name: "Resume",
        link: "Udhayakumar_Resume.pdf",
        icon: <FaDownload />,
        download:true,
      },
    ];

    return (
      <nav className="navbar navbar-expand-lg fixed-top">

        <div className="container-fluid px-4">

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

          <div className="collapse navbar-collapse" id="navbarNav">

            {/* Logo */}

            <div className="logo">
              UK
            </div>

            {/* Navigation */}

            <ul className="navbar-nav mx-auto gap-1">

              {NavHead.map((item) => (
                <li className="nav-item" key={item.name}>

                  <a className="nav-link" href={item.link}  download={item.download}>

                    <span className="nav-icon">
                      {item.icon}
                    </span>

                    <span>
                      {item.name}
                    </span>

                  </a>

                </li>
              ))}

            </ul>

            {/* Profile */}

            <div className="profile-section">
              <Profile />
            </div>

          </div>

        </div>

      </nav>
    );
  }

  export default Navbar;