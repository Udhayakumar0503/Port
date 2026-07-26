import { useState } from "react";
import "./about.css";
import {
    FaCode, FaPalette, FaBug, FaDesktop, FaHtml5, FaCss3Alt, FaJs, FaReact,
    FaBootstrap, FaGitAlt, FaGithub, FaCogs, FaJava, FaServer, FaShieldAlt, FaTasks
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiSelenium, SiApachemaven, SiCucumber, SiEclipseide } from "react-icons/si";
function About() {
    const [openBox, setOpenBox] = useState(null);

    // This is the FUNCTION that controls the accordion open/close.
    // It runs every time you click a "+" icon or an accordion head.
    function toggleAccordion(itemNumber) {
        if (openBox === itemNumber) {
            // Clicking the item that's already open closes it
            setOpenBox(null);
        } else {
            // Clicking a different item opens that one instead
            setOpenBox(itemNumber);
        }
    }

    return (
        <section className="about-wrapper" id="about">
            {/* BOX 1: Testimonials */}
            <div className="about-grid">
                <div className="left-side">
                    <div className="box">
                        <h2 className="box-title-box1">WHY SHOULD HIRE ME</h2>
                        <div className="choose-grid">
                            <div className="choose-item ">
                                <div className="testi-item">
                                    <div className="choose-box">
                                        <h4>Clean Code</h4>
                                        <div className="fa-icon-ex"><FaCode /></div>
                                        <p>
                                            I develop responsive and optimized websites
                                            with clean and maintainable code.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="choose-item ">
                                <div className="testi-grid">
                                    <div className="testi-item">
                                        <div className="choose-box">
                                            <h4>Modern Design</h4>
                                            <div className="fa-icon-ex"><FaPalette /></div>
                                            <p>
                                                Creating modern UI designs with better user experience and professional layouts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="choose-item">
                                <div className="testi-item">
                                    <div className="choose-box">
                                        <h4>Testing Skills</h4>
                                        <div className="fa-icon-ex"><FaBug /></div>
                                        <p>
                                            Skilled in software testing and automation testing for quality assurance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOX 2: What I Can Do For You (Accordion) */}
                    <div className="box service-box">
                        <h2 className="box-title">WHAT I CAN DO FOR YOU</h2>
                        <p className="box-desc">
                            Building Modern Web Applications Through Creative Design, Full Stack Development, and Quality Assurance.
                        </p>

                        <div className="accordion">
                            <div className="acc-item " onClick={() => toggleAccordion(1)}>
                                <div className="acc-head">
                                    <h5>1. Web Design and Developer</h5>
                                    <div className="acc-icon" >v</div>
                                </div>
                                {openBox === 1 && (
                                    <div className="acc-panel">
                                        <p>Designing modern user interfaces and developing responsive, user-friendly websites .</p>
                                    </div>
                                )}
                            </div>

                            <div className="acc-item active" onClick={() => toggleAccordion(2)}>
                                <div className="acc-head">
                                    <h5>2. FullStack Developer</h5>
                                    <div className="acc-icon">v</div>
                                </div>
                                {openBox === 2 && (
                                    <div className="acc-panel">
                                        <p>Building scalable web applications from intuitive frontends to powerful backend systems.</p>
                                    </div>
                                )}
                            </div>

                            <div className="acc-item" onClick={() => toggleAccordion(3)}>
                                <div className="acc-head" >
                                    <h5>3. Software Tester</h5>
                                    <div className="acc-icon">v</div>
                                </div>
                                {openBox === 3 && (
                                    <div className="acc-panel">
                                        <p>Ensuring software quality through comprehensive manual and automated testing.</p>
                                    </div>
                                )}
                            </div>

                            <div className="acc-item" onClick={() => toggleAccordion(4)}>
                                <div className="acc-head">
                                    <h5>4. Software Engineer</h5>
                                    <div className="acc-icon">v</div>
                                </div>
                                {openBox === 4 && (
                                    <div className="acc-panel">
                                        <p>Designing, developing, and optimizing reliable software solutions for real-world problems.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* BOX 3: Tech Stack */}
                    <div className="box">
                        <h2 className="box-title">MY TECH STACK</h2>
                        <p className="box-desc">
                            I build with intention. Framer for fast, interactive web design.
                            Each tool supports how I think, design, and deliver.
                        </p>
                        <div className="tech-list">
                            <div className="tech-item">
                                <div className="tech-icon tech-framer">< SiEclipseide/></div>
                                <div>
                                    <h5>Eclipse</h5>
                                    <p>My creative playground for building interactive and responsive websites.</p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon tech-figma">VS</div>
                                <div>
                                    <h5>VS Code</h5>
                                    <p>Where I connect, share insights, and grow within the design community.</p>
                                </div>
                            </div>
                            <div className="tech-item">
                                <div className="tech-icon tech-figma"><FaGithub /></div>
                                <div>
                                    <h5>Github</h5>
                                    <p>Where I connect, share insights, and grow within the design community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    {/* BOX 5: Education */}
                    <div className="box">
                        <h2 className="box-title">EDUCATION</h2>
                        <div className="edu-wrapper">
                            <div className="edu-card">
                                <div className="edu-icon">🎓</div>
                                <div className="edu-content">
                                    <h4>B.Sc Computer Science</h4>
                                    <span>Bishop Heber College</span>
                                    <p>2020 – 2023</p>
                                </div>
                            </div>
                            <div className="edu-card">
                                <div className="edu-icon">📘</div>
                                <div className="edu-content">
                                    <h4>Automation Testing</h4>
                                    <span>Greens Technology</span>
                                    <p>Sep 2023 – Dec 2023</p>
                                </div>
                            </div>

                            <div className="edu-card">
                                <div className="edu-icon">💻</div>
                                <div className="edu-content">
                                    <h4>Full Stack Development</h4>
                                    <span>Uniq Technology</span>
                                    <p>Mar 2026 – Present</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box skill-box" id="skills">
                        <h2 className="box-title">SKILLS</h2>
                        <p className="box-desc">
                            Technologies and tools I work with.
                        </p>

                        <div className="skill-row">
                            {/* Frontend */}
                            <div className="skill-sec">
                                <div className="lan">
                                    <div className="f-end">
                                        <div className="f-i">
                                            <FaDesktop />
                                        </div>
                                        <div className="end-name">
                                            <h3>Frontend</h3>
                                            <p>Building responsive and interactive user interfaces.</p>
                                        </div>
                                    </div>
                                    <div className="icon-skill">
                                        <span className="spa-ico"><FaHtml5 className="html" />HTML5</span>
                                        <span className="spa-ico"><FaCss3Alt className="css" />CSS</span>
                                        <span className="spa-ico"><FaBootstrap className="bootstrap" />Bootstrap</span>
                                        <span className="spa-ico"><FaJs className="js" />JavaScript</span>
                                        <span className="spa-ico"><FaReact className="react" />React.Js</span>
                                    </div>
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="skill-sec">
                                <div className="lan">
                                    <div className="f-end">
                                        <div className="f-i">
                                            <FaCogs />
                                        </div>
                                        <div className="end-name">
                                            <h3>Backend</h3>
                                            <p>Developing robust backend solutions with efficient database management.</p>
                                        </div>
                                    </div>
                                    <div className="icon-skill">
                                        <span className="spa-ico"><FaJava className="java" />Java</span>
                                        <span className="spa-ico"><SiSpringboot className="spring" />Springboot</span>
                                        <span className="spa-ico"><SiMysql className="mysql" />MySql</span>
                                        <span className="spa-ico"><FaServer className="restapi" />RestApi</span>
                                        <span className="spa-ico"><FaJava className="java" />Java 8</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-sec">
                                <div className="lan">
                                    <div className="f-end">
                                        <div className="f-i">
                                            <FaShieldAlt />
                                        </div>
                                        <div className="end-name">
                                            <h3>Testing</h3>
                                            <p>Testing today for a better product tomorrow.</p>
                                        </div>
                                    </div>
                                    <div className="icon-skill">
                                        <span className="spa-ico"><FaJava className="java" />Java</span>
                                        <span className="spa-ico"><SiSelenium className="selenium" />Selenium</span>
                                        <span className="spa-ico"><SiApachemaven className="maven" />Apache Maven</span>
                                        <span className="spa-ico"><FaTasks className="testng" />TestNg</span>
                                        <span className="spa-ico"><SiCucumber className="cucumber" />Cucumber </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;