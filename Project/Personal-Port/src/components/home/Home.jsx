import "./Home.css";
import coverImage from "../../assets/coveri.jpg";
import proimage from "../../assets/Profile.png";
import { FaBug, FaCloud, FaEnvelope, FaGithub, FaLaptop, FaLaptopCode, FaLinkedin, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
function Home() {
    return (
        <section className="bg-Sec " id="home">

            <div className="container hero-con">
                <div className="row align-items-center ">

                    <div className="col-lg-8">
                        <div className="hero-card">
                            <img src={coverImage} alt="Cover" className="c-img" />
                            <div className="profile-wrap">
                                <img src={proimage} alt="Profile" className="p-img" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 ">
                        <div className="soc-head">
                            <h5 className="url-tit">Social Profiles</h5>
                            <h5 className="url-links"><span><FaLinkedin /> <a className="link-s" href="https://www.linkedin.com/in/udhayakumar-r-97589a1b8/" target="_blank" rel="noopener noreferrer"><span className="link-text">Linked In</span></a></span></h5>
                            <h5 className="url-links"><span><FaGithub /> <a className="link-s" href="https://github.com/Udhayakumar0503" target="_blank" rel="noopener noreferrer"><span className="link-text">Git Hub</span></a></span></h5>
                            <h5 className="url-links"><span><FaEnvelope /> <a className="link-s" href="mailto:udhayakumarravichandran@gmail.com"><span className="link-text">Mail</span></a></span></h5>
                           
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <Profiletitle />
            </div>
        </section>
    );
}

function Profiletitle() {
    return (
        <div className="container profi-tit">
            <div className="row p-row">
                <div className="col-lg-8">
                    <div className="p-col">
                        <h2 className="pro-name">Prabhakaran R</h2>
                        <h6 className="pro-role">Full Stack Developer | Software Tester</h6><h6>2 Years Experience</h6>
                        <p className="pro-add"><FaMapMarkerAlt />Tiruchirappalli, Tamil Nadu, India.</p>
                        <p className="pro-sum"> Passionate Full Stack Developer with a strong foundation in
                            building responsive and user-friendly web applications.
                            Always eager to learn new technologies and solve real-world
                            problems.
                        </p>
                        
                            <h4>Preferred Location</h4>
                            <p>
                                <FaMapMarkerAlt /> Chennai
                                <span>|</span> Bangalore
                                <span>|</span> Coimbatore
                                <span>|</span> Flexible
                            </p>
                        
                    </div>
                </div>

                <div className="col-lg-4 ">
                    <div className="pref-job">
                        <h4 className="look-for"> Expected Roles</h4>

                        <div className="role-grid">
                            <p className="job-look"><FaLaptop /> Java Full Stack Developer</p>
                            <p className="job-look"><FaCloud /> Cloud Support Engineer</p>
                            <p className="job-look"><FaBug /> Software Test Engineer</p>
                            <p className="job-look"><FaLaptopCode /> Software Developer</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>




    );


}
export default Home;