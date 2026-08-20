import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <header className="d-flex align-items-center justify-content-between">
                <h1 className="mb-0"><span>R</span>A</h1>
                <ul className="mb-0 p-0 d-flex">
                    <NavLink to="/home" className="text-decoration-none me-2 me-md-4 link" activeClassName="active"><li>Home</li></NavLink>
                    <NavLink to="/about" className="text-decoration-none me-2 me-md-4 link" activeClassName="active"><li>About</li></NavLink>
                    <NavLink to="/skills" className="text-decoration-none me-2 me-md-4 link" activeClassName="active"><li>Skills</li></NavLink>
                    <NavLink to="/projects" className="text-decoration-none me-2 me-md-4 link" activeClassName="active"><li>Projects</li></NavLink>
                    <NavLink to="/experience" className="text-decoration-none me-2 me-md-4 link" activeClassName="active"><li> Experience</li></NavLink>
                    <NavLink to="/contact" className="text-decoration-none link" activeClassName="active"><li>Contact</li></NavLink>
                </ul>
                <button onClick={toggleTheme} className="d-flex align-items-center" aria-label="Toggle theme">
                    {theme === "dark" ? <FaSun /> : <FaMoon />}
                </button>
            </header>
        </>
    )
}
export default Header;