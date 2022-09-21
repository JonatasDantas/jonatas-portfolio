import Particles from 'react-particles-js';
import { makeStyles, Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './Home.scss';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// import Logo from '../../assets/img/logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(26),
    height: theme.spacing(26),
    display: 'inline-flex',
  },
  button: {
    zIndex: 3,
  },
}));

const Home = () => {
  const classes = useStyles();
  const textRef = useRef(null);
  const { t } = useTranslation();
  const textConstants = [
    t('home.welcoming.freelancer'),
    t('home.welcoming.javascript'),
    t('home.welcoming.java'),
    t('home.welcoming.flutter'),
  ];
  const [textIndex, setTextIndex] = useState(1);

  useEffect(() => {
    textRef.current.innerHTML = textConstants[textIndex];
    textRef.current.style.animation = 'typing 4s steps(40, end), blink-caret .75s step-end infinite';
    textRef.current.style.webkitAnimation = 'typing 4s steps(40, end), blink-caret .75s step-end infinite';

    setTimeout(() => {
      textRef.current.style.animation = 'none';
      textRef.current.style.webkitAnimation = 'none';
      setTextIndex((textIndex === textConstants.length - 1) ? 0 : textIndex + 1);
    }, 4000);
  }, [textIndex]);

  return (
    <section className="home visible" id="home">
      <div className="info">
        <h1>Jonatas de Almeida Dantas</h1>

        <div className="welcoming-text">
          <span>{t('home.welcoming.fullStack')}</span>
        </div>
        <div className="welcoming-text">
          <span>{t('home.welcoming.mobile')}</span>
        </div>
        <div className="welcoming-text">
          <span className="animated" ref={textRef}>{textConstants[0]}</span>
        </div>

        <Button
          variant="contained"
          color="default"
          size="large"
          className={classes.button}
          endIcon={<ArrowForwardIcon />}
          onClick={() => { window.location.href = '#about-me'; }}
        >
          {t('home.learnMoreButton')}
        </Button>

        <br />
        <br />

        <div className="image">
          {/* <Avatar alt="Jonatas de Almeida" src={userImg} className={classes.large} /> */}
        </div>
      </div>
      {/*
      <div className="logo-wrapper">
        <img src={Logo} alt="logo" />
      </div> */}

      <Particles
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
        }}
      />

      {/* <nav className="navigation">
                <div className="menu">
                    <div className="menuItem">Home</div>
                    <div className="menuItem">Sobre Mim</div>
                    <div className="menuItem">Habilidades</div>
                    <div className="menuItem">Projetos</div>
                    <div className="menuItem">Contato</div>
                </div>
            </nav> */}
    </section>
  );
};

export default Home;
