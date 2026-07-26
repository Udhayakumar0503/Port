import "./experience.css";
import {
    FaBug, FaCalendarAlt, FaTrophy, FaWarehouse, FaUserTie

} from "react-icons/fa";

const experiences = [
    {
        role: "Trainee", company: "India Japan Lighting Private Limited",
        duration: "July,2025 -June,2026", loaction: "Chennai", status: "Previous", description: "Worked on a data entry task and documentation using Ms Excel, Power Point, and Ms Word. Managing and organizing the data efficiently to support the bussiness Operations."
    },
    {
        role: "Proposal Engineer", company: "Clear Aqua Technologies",
        duration: "April,2024-June,2025", loaction: " Trichy", status: "Previous", description: "Prespared the technical proposals and documentation for the water treatment projects,Collobrate with the cross functional teams to deliver customized solution for client requirments."
    },
    {
        role: "Software Testing Intern", company: "Greens Technology",
        duration: "September,2023 - December, 2023", loaction: " Trichy", status: "Previous", description: "Learned the automation testing concepts using Selenium,TestNg,and Maven, Worked on the testcases development and find the bug, reporting,and test execution."
    }
]

const project = [
    { icon: <FaUserTie />, projecName: "Portfolio", tools: "React.js • HTML5 • CSS3 • JavaScript", description: "Developed a responsive portfolio website using React.js to showcase my skills, projects, and professional experience with a clean and modern user interface." },
    { icon: <FaBug />, projecName: "Automation Testing", tools: "Java • Selenium • TestNG • Maven", description: "Developed Selenium WebDriver test scripts using Java and TestNG to automate web application testing and improve software quality through efficient test execution." },
    { icon: <FaWarehouse />, projecName: "Smart Warehouse Cooler System", tools: "Arduino • C++ • Python", description: "Built a smart warehouse cooler monitoring system using Arduino, C++, and Python to monitor temperature and ensure safe storage conditions." }

]
function Exp() {

    return (

        <section className="section-exp" id="experience">
            <div className="section-container">
                <div className="left-exp">

                    <div className="exp-heading">
                        <h2>My Experience</h2>
                        <p> A journey of growth, learning and delivering impactful solutions through innovative technologies.</p>
                    </div>

                    <div className="exp-timeline">

                        {experiences.map((experience, index) => {
                            return (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-icon">
                                        💼
                                    </div>
                                    <div className="experience-card">
                                        <h3>{experience.role}</h3>
                                        <h4>{experience.company}</h4>
                                    </div>



                                    <div className="experience-meta">
                                        <p>{experience.duration}</p>
                                        <p>{experience.loaction}</p>
                                    </div>
                                    <p className="description">
                                        {experience.description}
                                    </p>

                                </div>
                            )

                        })}

                    </div>

                </div>
                <div className="right-exp">
                    <div className="right-container">
                        <div className="exp-over">
                            <p>Experience Overview</p>
                        </div>
                        <div className="experiece-content">
                            <div className="experience-over-icon"><FaCalendarAlt /></div>
                            <div className="total-ecperience">
                                <p> 2+</p><span>Years Experience</span>
                            </div>
                            <div className="line"></div>
                            <div className="experience-over-icon"><FaTrophy /></div>
                            <div className="total-ecperience">
                                <p> 3+ </p>
                                <span className=" S">Projects Completed</span>

                            </div>
                        </div>
                    </div>

                    <div className="project-box" id="projects">
                        <div>
                            <h4>Projects</h4>
                        </div>
                        {project.map((projects, index) => {
                            return (
                                <div className="project-item" key={index}>
                                    <div className="project-icon">
                                        {projects.icon}
                                    </div>
                                    <div className="project-card">
                                        <h3>  {projects.projecName}</h3>
                                        <h4>{projects.tools}</h4>
                                   
                                    <p className="pro-description">
                                        {projects.description}
                                    </p>
                                     </div>
                                </div>
                            )

                        })}

                    </div>
                </div>
            </div>



        </section>

    )


}
export default Exp;