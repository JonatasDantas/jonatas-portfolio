import Home from './sections/home/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import StarIcon from '@material-ui/icons/Star';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import './App.scss';
import { useState, useEffect } from 'react';
import AboutMe from './sections/about-me/AboutMe';
import Skills from './sections/skills/Skills';

function App() {
  const [drawerOpen, setDrawer] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const sections = [
    {
      text: "Home",
      icon: <HomeIcon />,
      section: "home",
    },
    {
      text: "Sobre mim",
      icon: <AccountBoxIcon />,
      section: "about-me"
    },
    {
      text: "Habilidades",
      icon: <StarIcon />,
      section: "skills"
    },
    {
      text: "Projetos",
      icon: <PhotoLibraryIcon />,
      section: "projects"
    },
    {
      text: "Contato",
      icon: <WhatsAppIcon />,
      section: "contact"
    }
  ];

  useEffect(() => {
    window.onscroll = () => {
      const elements = document.getElementsByTagName("section");

      for (const element of elements) {
        if (!isElementOutViewport(element)) {
          setCurrentSection(element.id);
        }
      }
    }
  }, []);

  function isElementOutViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
  }

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
            <MenuIcon />
          </IconButton>

          {sections.map((item, index) => (
            <Typography variant="h6" className="nav-item" key={index}>
              <a className={currentSection === item.section ? 'active' : ''} href={`#${item.section}`}>{item.text}</a>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>

      <AboutMe/>
      <Skills/>

      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClick={() => setDrawer(false)}
        onKeyDown={() => setDrawer(false)}
        style={{ width: 240 }}
      >
        <List>
          {sections.map((item, index) => (
            <ListItem button key={index}>
              <a href={`#${item.section}`}>
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={item.text} />
              </a>
            </ListItem>
          ))}
        </List>

      </SwipeableDrawer>
    </div>
  );
}

export default App;
