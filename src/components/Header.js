/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {
  AppBar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  Menu,
  Home as HomeIcon,
  AccountBox,
  Star,
  PhotoLibrary,
  WhatsApp,
} from '@material-ui/icons';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../assets/img/logo-sem-fundo.png';

export function Header() {
  const { t } = useTranslation();
  const [drawerOpen, setDrawer] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const sections = [
    {
      text: t('home.title'),
      icon: <HomeIcon />,
      section: 'home',
    },
    {
      text: t('aboutMe.title'),
      icon: <AccountBox />,
      section: 'about-me',
    },
    {
      text: t('skills.title'),
      icon: <Star />,
      section: 'skills',
    },
    {
      text: t('projects.title'),
      icon: <PhotoLibrary />,
      section: 'projects',
    },
    {
      text: t('contactMe.title'),
      icon: <WhatsApp />,
      section: 'contact',
    },
  ];

  function isElementOutViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom < 0
      || rect.right < 0
      || rect.left > window.innerWidth
      || rect.top > window.innerHeight
    );
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

  function redirectToSection(sectionId) {
    const url = window.location.href;

    if (url.includes('/project/')) {
      window.location.replace(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      window.scrollTo(0, element.offsetTop - 50);
    }
  }

  return (
    <>
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
              <span
                className={currentSection === item.section ? 'active' : ''}
                onClick={() => redirectToSection(item.section)}
                role="button"
              >
                {item.text}
              </span>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>

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
              <span
                onClick={() => redirectToSection(item.section)}
                role="button"
              >
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={item.text} />
              </span>
            </ListItem>
          ))}
        </List>

        <div className="drawer-logo">
          <img src={Logo} alt="logo" />
        </div>
      </SwipeableDrawer>
    </>
  );
}
