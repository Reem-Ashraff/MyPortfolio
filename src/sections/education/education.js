import React from "react";
import "./education.css";

const Education = () => {
    const educations = [
        {
            icon: "bi-mortarboard-fill",
            title: "Master of Computer Science",
            university: "Sohag University",
            degree: "In Progress",
            date: "Apr 2025 – Present",
            details:
                "Currently pursuing a Master's degree, deepening my knowledge in advanced computer science concepts and research.",
        },
        {
            icon: "bi-award-fill",
            title: "Bachelor of Computers and Information – Bioinformatics",
            university: "Assiut University",
            degree: "GPA: 3.65 / 4.0",
            date: "Sep 2019 – Jul 2023",
            details:
                "Graduated with a strong foundation in computer science, bioinformatics, and problem-solving. Focused on web development, databases, and software engineering.",
        },
    ];
    return (
        <>
            <section className="education-section">
                <div className="education-head">
                    <h3 className="mb-0">Education</h3>
                    <div className="line">________</div>
                </div>
                <p className="education-description">
                    My academic background and ongoing studies.
                </p>
                <div className="education-timeline">
                    {educations.map((education, index) => (
                        <div
                            className="education-item d-flex align-items-center"
                            key={index}
                        >
                            <div className="education-icon">
                                <i className={`bi ${education.icon}`}></i>
                            </div>

                            <div className="timeline-dot"></div>

                            <div className="education-card col">
                                <div className="education-card-header d-flex align-items-center justify-content-between">
                                    <h4>{education.title}</h4>
                                    <span>{education.degree}</span>
                                </div>

                                <p className="education-university">{education.university}</p>

                                <p className="education-date">
                                    <i className="bi bi-calendar3"></i>
                                    <span>{education.date}</span>
                                </p>

                                <div className="education-details">{education.details}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
export default Education;
