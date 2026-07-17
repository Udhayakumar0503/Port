import "./experience.css";

const experiences = [
    {
        role: "Trainee", company: "India Japan Lighting Private Limited",
        duration: "July,2025 -June,2026", loaction: "Chennai", status:"Previous", description: "Worked on a data entry task and documentation using Ms Excel, Power Point, and Ms Word. Managing and organizing the data efficiently to support the bussiness Operations."
    },
    {
        role: "Proposal Engineer", company: "Clear Aqua Technologies",
        duration: "April,2024-June,2025", loaction: " Trichy",status:"Previous", description: "Prespared the technical proposals and documentation for the water treatment projects,Collobrate with the cross functional teams to deliver customized solution for client requirments."
    },
    {
        role: "Software Testing Intern", company: "Greens Technology",
        duration: "September,2023 - December, 2023", loaction: " Trichy",status:"Previous", description: "Learned the automation testing concepts using Selenium,TestNg,and Maven, Worked on the testcases development and find the bug, reporting,and test execution."
    }
]

const project=[
    {projecName:"Portfolio", tools:"HTML5, CSS, JS,REACT.Js", description:""},
     {projecName:"Automation Testing", tools:"JAVA, SELENIUM, TESTNG", description:""},
      {projecName:"Smart Warehouse Cooler System", tools:"PYTHON, C++,AURDUINO", description:""}

]
function Exp() {

    return (

        <section className="section-exp">
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

                </div>
            </div>

        </section>

    )


}
export default Exp;