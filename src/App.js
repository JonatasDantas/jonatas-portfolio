import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './sections/home/Home';
import AboutMe from './sections/about-me/AboutMe';
import Skills from './sections/skills/Skills';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';

import Logo from './assets/img/logo-sem-fundo.png';

import './App.scss';
import { Header } from './components/Header';
import { ProjectPage } from './pages/project/ProjectPage';

function HomePage() {
  return (
    <div className="app">
      <Home />

      <Header />

      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <div className="footer">
        Design By
        <img className="footer-logo" src={Logo} alt="logo" />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/project/:projectId" component={ProjectPage} />
    </Router>
  );
}

export default App;
