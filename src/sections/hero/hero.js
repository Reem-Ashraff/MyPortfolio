import React from "react";
import "./hero.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Hero = () => {
    return (
        <>
            <section className="hero-section d-flex align-items-center">
            </section>
            <div className="d-flex align-items-center hero-text">
                <div>
                        <div className="welcome">Hello, I'm</div>
                        <div className="name">Reem Ashraf Amin</div>
                        <div className="position">Full-Stack Developer</div>
                        <p className="paragraph">I build responsive and dynamic web applications using<br />modern technologles. Passionate about clean code<br />user experience, and delivering high-quality solutions.</p>
                        <div className="d-flex">
                            <a href="https://github.com/Reem-Ashraff" target="_blank" rel="noreferrer" className="social-link">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/reem-ashraf-7116a9199/" target="_blank" rel="noreferrer" className="social-link">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="mailto:reemashraff7@gmail.com" className="social-link">
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </div>
                        <div className="d-flex hero-buttons">
                            <Link to="/projects" className="link me-4"><button className="btn1">View My Work <i className="bi bi-arrow-right-short"></i></button></Link>
                            <Link to="/contact" className="link"><button className="btn2">Contact Me <i className="bi bi-arrow-right-short"></i></button></Link>
                        </div>
                    </div>
            </div>
            {/* <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <div className="welcome">Hello, I'm</div>
                        <div className="name">Reem Ashraf Amin</div>
                        <div className="position">Full-Stack Developer</div>
                        <p className="paragraph">I build responsive and dynamic web applications using<br />modern technologles. Passionate about clean code<br />user experience, and delivering high-quality solutions.</p>
                        <div className="d-flex">
                            <a href="https://github.com/Reem-Ashraff" target="_blank" rel="noreferrer" className="social-link">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/reem-ashraf-7116a9199/" target="_blank" rel="noreferrer" className="social-link">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="mailto:reemashraff7@gmail.com" className="social-link">
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </div>
                        <div className="d-flex hero-buttons">
                            <Link to="/projects" className="link me-4"><button className="btn1">View My Work</button></Link>
                            <Link to="/contact" className="link"><button className="btn2">Contact Me</button></Link>
                        </div>
                    </div>
                </div> */}
        </>
    )
}
export default Hero;