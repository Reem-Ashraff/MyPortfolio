import { Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom';
import './App.css';
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from './home';
import Header from './sections/header/header';
import Projects from './sections/projects/projects';
import Skills from './sections/skills/skills';
import About from './sections/about/about';
import Experience from './sections/experience/experience';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';
import ProjectDetails from './sections/project-details/details';

function App() {
  return (
    <>
    <Router>
      <ThemeProvider>
        <div className='page-wrapper'>
      <Header></Header>
      <Switch>
        <Route exact path="/"><Redirect to="/home" /></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/projects" exact component={Projects}></Route>
        <Route path="/skills" exact component={Skills}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/experience" exact component={Experience}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/details/:id" exact component={ProjectDetails}></Route>
      </Switch>
      <Footer></Footer>
      </div>
      </ThemeProvider>
    </Router>
    </>
  );
}

export default App;
