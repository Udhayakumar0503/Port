import "./Profile.css";
import { useState } from "react";
import { FaChevronDown, FaEnvelope, FaGithub, FaLinkedin, FaMailBulk, FaUber, FaUser } from "react-icons/fa";
import ProfileImage from "../../assets/Profile.png";

function Profile() {
    const [isOpen, setIsOpen]= useState(false);
  return (
    <div className="profile-container" onClick={()=> { console.log(!isOpen); setIsOpen(!isOpen)}}  >

      <div className="profile-circle">
        <img
          src={ProfileImage}
          alt="Profile"
          className="profile-image"
        />
      </div>

<FaChevronDown  className={`profile-arrow ${isOpen ? "rotate" : ""}`}/>

      {isOpen && (
        <div className="my-dropdown ">
        <a href="#" className="profile-item"><FaLinkedin/> LinkedIn</a>
        <a href="#" className="profile-item"><FaGithub/> GitHub</a>
        <a href="#" className="profile-item"><FaEnvelope/> Gmail</a>
        <a href="#" className="profile-item"><FaUser/> Personal Data</a>
            </div>
      )}

      

    </div>

    
  );
}

export default Profile;