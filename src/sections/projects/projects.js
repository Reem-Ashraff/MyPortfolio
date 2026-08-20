import React from "react";
import "./projects.css";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Projects = () => {
    const { theme } = useTheme();
    const projects = [
        {
            id: "bonian-nabil",
            title: "Bonian Nabil",
            category: "Corporate Website",
            tech: ["React.js, ", "Bootstrap, ", "JavaScript"],
            description: "Developed a responsive multi-page corporate website for a general contracting company, showcasing its services, projects, and company portfolio through a modern and user-friendly interface.",
            darkImage: `${process.env.PUBLIC_URL}/assets/bonian/bonian-dark.png`,
            lightImage: `${process.env.PUBLIC_URL}/assets/bonian/bonian-light.png`,
            live: "https://www.boniannabil.com",
            github: null
        },
        {
            id: "furniture-store",
            title: "Furniture Store",
            category: "Full-Stack E-Commerce",
            tech: ["React.js, ", "Redux, ", "Laravel, ", "MySQL"],
            description: "Developed a full-stack e-commerce platform for managing and purchasing furniture products, featuring authentication, product management, shopping cart, wishlist, order management, and an admin dashboard.",
            darkImage: `${process.env.PUBLIC_URL}/assets/furniture/furniture-dark.png`,
            lightImage: `${process.env.PUBLIC_URL}/assets/furniture/furniture-light.png`,
            live: null,
            github: "https://github.com/Reem-Ashraff/react-furniture-store"
        },
        {
            id: "bikes-rental",
            title: "Bikes Rental",
            category: "Full-Stack Rental Platform",
            tech: ["Angular, ", "Laravel, ", "MySQL"],
            description: "Developed a full-stack bike rental platform with bike browsing, rental management, user authentication, offers, locations, and an admin dashboard.",
            darkImage: `${process.env.PUBLIC_URL}/assets/bikes/bikes-dark.png`,
            lightImage: `${process.env.PUBLIC_URL}/assets/bikes/bikes-light.png`,
            live: null,
            github: "https://github.com/Reem-Ashraff/Bikes_Rental_website"
        },
        {
            id: "green-store",
            title: "Green Store",
            category: "Full-Stack E-Commerce",
            tech: ["Angular, ", "PHP, ", "MySQL"],
            description: "Developed a full-stack e-commerce platform for browsing and managing products, featuring a customer-facing storefront and an administrative dashboard.",
            darkImage: `${process.env.PUBLIC_URL}/assets/green/green-dark.png`,
            lightImage: `${process.env.PUBLIC_URL}/assets/green/green-light.png`,
            live: "https://angular-green-store-npux.vercel.app/",
            github: null
        }
    ];
    return (
        <>
            <section className="projects-section content">
                <div className="projects-head d-flex justify-content-between">
                    <div>
                        <h3 className="mb-0">My Projects</h3>
                        <div className="line">________</div>
                    </div>
                    <a href="https://github.com/Reem-Ashraff" target="_blank" rel="noreferrer">View All on GitHub <i className="bi bi-arrow-right-short"></i></a>
                </div>
                <p className="projects-description">Here are some of the projects I've built. Each one reflects my passion for clean code, problem-solving, and creating meaningful digital experiences.</p>
                <div className="d-flex justify-content-between flex-wrap">
                    {projects.map((project, index) => {
                        return (
                            <div className="project" key={index}>
                                <div className="project-img">
                                    <img src={theme === "dark" ? project.darkImage : project.lightImage} className="w-100 h-auto" alt="project-img"></img>
                                </div>
                                <div className="card-content">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="mb-0 title">{project.title}</h4>
                                        <div className="category">{project.category}</div>
                                    </div>
                                    <p className="description">{project.description}</p>
                                    <div className="technology"><span>Tech:</span> {project.tech}</div>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            {project.live && (<a href={project.live} target="_blank" rel="noreferrer" className="view-btn link">Live Demo <i className="bi bi-box-arrow-up-right"></i></a>)}
                                            {project.github && (<a href={project.github} target="_blank" rel="noreferrer" className="view-btn link"><i className="bi bi-github"></i> View Code <i className="bi bi-arrow-right-short"></i></a>)}
                                        </div>
                                        <Link to={`/details/${project.id}`} className="link"><button className="view-btn">Project Details <i className="bi bi-arrow-right-short"></i></button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
export default Projects;