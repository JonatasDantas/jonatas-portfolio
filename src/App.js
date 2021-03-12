import { useState, useEffect } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from '@material-ui/core';

import {
  Menu,
  Home as HomeIcon,
  AccountBox,
  Star,
  PhotoLibrary,
  WhatsApp,
} from '@material-ui/icons';

import Home from './sections/home/Home';
import AboutMe from './sections/about-me/AboutMe';
import Skills from './sections/skills/Skills';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';

import Logo from './assets/img/logo-sem-fundo.png';

import './App.scss';

function App() {
  const [drawerOpen, setDrawer] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const sections = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      section: 'home',
    },
    {
      text: 'Sobre mim',
      icon: <AccountBox />,
      section: 'about-me',
    },
    {
      text: 'Habilidades',
      icon: <Star />,
      section: 'skills',
    },
    {
      text: 'Projetos',
      icon: <PhotoLibrary />,
      section: 'projects',
    },
    {
      text: 'Contato',
      icon: <WhatsApp />,
      section: 'contact',
    },
  ];

  function isElementOutViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0
      || rect.left > window.innerWidth
      || rect.top > window.innerHeight;
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    window.onscroll = () => {
      const elements = document.getElementsByTagName('section');

      // eslint-disable-next-line no-restricted-syntax
      for (const element of elements) {
        if (!isElementOutViewport(element)) {
          element.classList.add('visible');
          setCurrentSection(element.id);
        }
      }
    };
  }, []);

  return (
    <div className="app">
      <Home />

      <AppBar className="navbar" position="sticky">
        <Toolbar className="toolbar" variant="dense">
          <IconButton
            className="drawer-toggle"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawer(true)}
            edge="start"
          >
            <Menu />
          </IconButton>

          {sections.map((item) => (
            <Typography variant="h6" className="nav-item" key={item.section}>
              <a className={currentSection === item.section ? 'active' : ''} href={`#${item.section}`}>{item.text}</a>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>

      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <div className="footer">
        Design By
        <img className="footer-logo" src={Logo} alt="logo" />
      </div>

      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClick={() => setDrawer(false)}
        onKeyDown={() => setDrawer(false)}
        style={{ width: 240 }}
      >
        <List>
          {sections.map((item) => (
            <ListItem button key={item.section}>
              <a href={`#${item.section}`}>
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={item.text} />
              </a>
            </ListItem>
          ))}
        </List>

        <div className="drawer-logo">
          <img src={Logo} alt="logo" />
        </div>

      </SwipeableDrawer>
    </div>
  );
}

export default App;
