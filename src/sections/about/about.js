import React from "react";
import "./about.css";

const About = () => {
    return (
        <>
            <section className="about-section content">
                <div className="about-head">
                    <h3 className="mb-0">About Me</h3>
                    <div className="line">________</div>
                </div>
                <div className="d-flex flex-wrap">
                    <div className="col-12 col-lg-6 about-content">
                        <p>I'm a Full-Stack Developer with hands-on experience in building web applications using React.js, Anguler, Laravel/PHP, and MySQL. I enjoy turning ideas into real-world solutions, writing clean and scalable code, and learning new technologies.</p>
                        <p>I have experience in developing RESTful APts, implementing authentication and authoritation systems, and building responsive and user-friendly intertaces.</p>
                        <p>I'm always eager to take on new challenges and contribute to meaningful projects.</p>
                        <a href={`${process.env.PUBLIC_URL}/assets/fullstack_resume_reem_ashraf.pdf`} target="_blank" rel="noreferrer"><i className="bi bi-download"></i> Download CV</a>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-end">
                        <div className="personal-info">
                            <h4>
                                <i className="bi bi-person-circle"></i>
                                Personal Info
                            </h4>
                            <div className="info-item d-flex align-items-center">
                                <i className="bi bi-person"></i>
                                <div>
                                    <span>Name</span>
                                    <p className="mb-0">Reem Ashraf Amin</p>
                                </div>
                            </div>
                            <div className="info-item d-flex align-items-center">
                                <i className="bi bi-geo-alt"></i>
                                <div>
                                    <span>Location</span>
                                    <p className="mb-0">Cairo, Egypt</p>
                                </div>
                            </div>
                            <div className="info-item d-flex align-items-center">
                                <i className="bi bi-envelope"></i>
                                <div>
                                    <span>Email</span>
                                    <p className="mb-0">reemashraff7@gmail.com</p>
                                </div>
                            </div>
                            <div className="info-item d-flex align-items-center">
                                <i className="bi bi-telephone"></i>
                                <div>
                                    <span>Phone</span>
                                    <p className="mb-0">+20 109 073 8742</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;