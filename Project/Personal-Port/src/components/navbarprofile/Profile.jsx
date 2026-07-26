import "./Profile.css";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaEnvelope, FaGithub, FaLinkedin, FaUser } from "react-icons/fa";
import ProfileImage from "../../assets/Profile.png";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="profile-container"
      ref={profileRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="profile-circle">
        <img src={ProfileImage} alt="Profile" className="profile-image" />
      </div>
      <FaChevronDown className={`profile-arrow ${isOpen ? "rotate" : ""}`} />
     {isOpen && (
  <div className="my-dropdown">
    <a
      href="https://www.linkedin.com/in/udhayakumar-r-97589a1b8/"
      target="_blank"
      rel="noopener noreferrer"
      className="profile-item"
    >
      <FaLinkedin /> LinkedIn
    </a>

    <a
      href="https://github.com/Udhayakumar0503"
      target="_blank"
      rel="noopener noreferrer"
      className="profile-item"
    >
      <FaGithub /> GitHub
    </a>

    <a
      href="mailto:udhayakumarravichandran@gmail.com"
      className="profile-item"
    >
      <FaEnvelope /> Gmail
    </a>
  </div>
)}
    </div>
  );
}

export default Profile;