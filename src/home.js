import React from "react";
import Hero from "./sections/hero/hero"
import Projects from "./sections/projects/projects";
import About from "./sections/about/about";
import Skills from "./sections/skills/skills";
import Experience from "./sections/experience/experience";
import Education from "./sections/education/education";
import Contact from "./sections/contact/contact";

const Home = () => {
    return (
      <main>
        <Hero></Hero>
        <Projects></Projects>
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Education></Education>
        <Contact></Contact>
      </main>
    )
}
export default Home;