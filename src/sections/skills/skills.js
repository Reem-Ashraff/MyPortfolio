import React from "react";
import "./skills.css";

const Skills = () => {
    const skills = {
        frontend: ["React.js", "Angular", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Redux", "Axios", "React Router", "jQuery"],
        backend: ["Laravel", "PHP", "RESTful APIs", "Authentication", "Authorization", "CRUD Operations", "Role-Based Access Control"],
        database: ["MySQL", "Database Design"],
        tools: ["Git", "GitHub", "Postman"],
        other: ["Responsive Web Design", "Single Page Application (SPA)"]
    }
    return (
        <>
            <section className="skills-section content">
                <div className="skills-head">
                    <h3 className="mb-0">My Skills</h3>
                    <div className="line">________</div>
                </div>
                <div className="d-flex flex-wrap justify-content-between">
                    <div className="skill-category width1">
                        <h4><i className="bi bi-window"></i> Frontend</h4>
                        <div className="d-flex flex-wrap skills">
                            {skills.frontend.map((skill,index)=>{
                                return(
                                    <div key={index}>{skill}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="skill-category width2">
                        <h4><i className="bi bi-server"></i> Backend</h4>
                        <div className="d-flex flex-wrap skills">
                            {skills.backend.map((skill,index)=>{
                                return(
                                    <div key={index}>{skill}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="skill-category width3">
                        <h4><i className="bi bi-database"></i> Database</h4>
                        <div className="d-flex flex-wrap skills">
                            {skills.database.map((skill,index)=>{
                                return(
                                    <div key={index}>{skill}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="skill-category width4">
                        <h4><i className="bi bi-tools"></i> Tools</h4>
                        <div className="d-flex flex-wrap skills">
                            {skills.tools.map((skill,index)=>{
                                return(
                                    <div key={index}>{skill}</div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="skill-category col-12">
                        <h4><i className="bi bi-globe2"></i> Other</h4>
                        <div className="d-flex flex-wrap skills">
                            {skills.other.map((skill,index)=>{
                                return(
                                    <div key={index}>{skill}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Skills;