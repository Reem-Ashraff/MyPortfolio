import React from "react";
import "./experience.css";

const Experience = () => {
    const experiences = [
        {
            icon: "bi-briefcase-fill",
            title: "Freelance Full-Stack Developer",
            company: "Bonian Nabil",
            date: "Jun 2026 – Present",
            details: [
                "Delivered a responsive corporate website for Bonian Nabil based on client requirements.",
                "Developed modern user interfaces using React.js and Bootstrap CSS.",
                "Implemented responsive layouts with attention to accessibility and performance.",
                "Managed the project lifecycle from requirements gathering through deployment."
            ],
            link: "https://www.boniannabil.com"
        },
        {
            icon: "bi-mortarboard-fill",
            title: "Full-Stack Developer Intern",
            company: "Petra Software | Wazeefa Tech Initiative",
            date: "Mar 2024 – Jul 2024",
            details: [
                "Developed 3 full-stack web applications using Angular, Laravel/PHP, and MySQL.",
                "Developed 10+ RESTful API endpoints to support application functionality.",
                "Implemented role-based authentication and authorization for different user types.",
                "Contributed to full-stack projects under the guidance of senior engineers."
            ]
        }
    ];
    return (
        <>
            <section className="experience-section content">
                <div className="experience-head">
                    <h3 className="mb-0">Experience Highlights</h3>
                    <div className="line">________</div>
                </div>
                <div className="experience-timeline">

                    {experiences.map((experience, index) => (
                        <div className="experience-item d-flex align-items-center" key={index}>
                            <div className="experience-icon">
                                <i className={`bi ${experience.icon}`}></i>
                            </div>

                            <div className="timeline-dot"></div>

                            <div className="experience-card col">

                                <div className="experience-card-header d-flex align-items-center justify-content-between">
                                    <h4>{experience.title}</h4>
                                    <span>{experience.date}</span>
                                </div>

                                <p className="experience-company">
                                    {experience.company}
                                </p>

                                <ul>
                                    {experience.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>

                                {experience.link && (
                                    <a
                                        href={experience.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="experience-link"
                                    >
                                        Live Website: {experience.link.replace("https://", "")}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
export default Experience;