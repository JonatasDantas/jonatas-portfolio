import Home from './sections/home/Home';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useScrollTrigger } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './App.scss';
import { useState } from 'react';

function App() {
  const fixedNav = useScrollTrigger({ threshold: window.innerHeight });
  const sections = ["Home", "Sobre mim", "Habilidades", "Projetos", "Contato"]
  const [drawerOpen, setDrawer] = useState(false);

  return (
    <div className="app">
      <Home />

      <AppBar className="navbar" position="sticky">
        <Toolbar className="toolbar" variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setDrawer(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>

          {sections.map((text, index) => (
            <Typography variant="h6" className="nav-item" key={index}>{text}</Typography>
          ))}
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClick={() => setDrawer(false)}
        onKeyDown={() => setDrawer(false)}
        style={{width: 240}}
      >
        <List>
          {sections.map((text, index) => (
            <ListItem button key={index}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}

              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </SwipeableDrawer>
      <div style={{ height: 1000 }}>

      </div>
    </div>
  );
}

export default App;
