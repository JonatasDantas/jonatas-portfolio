import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import SpeedIcon from '@material-ui/icons/Speed';
import DevicesIcon from '@material-ui/icons/Devices';
import CodeIcon from '@material-ui/icons/Code';
import PeopleIcon from '@material-ui/icons/People';
import { useTranslation } from 'react-i18next';
import avatarImg from '../../assets/img/avatar.png';

import './AboutMe.scss';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(54),
    height: theme.spacing(66),
    display: 'inline-flex',
    objectPosition: 'top',
  },
}));

function AboutMe() {
  const { t } = useTranslation();
  const classes = useStyles();

  const advantages = [
    {
      name: t('aboutMe.advantages.cleanCode.title'),
      description: t('aboutMe.advantages.cleanCode.description'),
      icon: <CodeIcon />,
    },
    {
      name: t('aboutMe.advantages.highPerformance.title'),
      description: t('aboutMe.advantages.highPerformance.description'),
      icon: <SpeedIcon />,
    },
    {
      name: t('aboutMe.advantages.responsive.title'),
      description: t('aboutMe.advantages.responsive.description'),
      icon: <DevicesIcon />,
    },
    {
      name: t('aboutMe.advantages.multidisciplinary.title'),
      description: t('aboutMe.advantages.multidisciplinary.description'),
      icon: <PeopleIcon />,
    },
  ];

  return (
    <section className="about-me" id="about-me">
      <div className="welcoming">{t('aboutMe.title')}</div>
      <hr className="divider" />

      <div className="details">
        <div className="image">
          <Avatar className={classes.avatar} src={avatarImg} />
        </div>

        <div className="info">
          <div className="text">
            {t('aboutMe.info.introduction')}

            <br />
            <br />

            {t('aboutMe.info.myWork')}

            <br />
            <br />
          </div>

          <div className="advantages">
            {
              advantages.map((advantage) => (
                <div className="advantage" key={advantage.name}>
                  <Avatar>
                    {advantage.icon}
                  </Avatar>
                  <span className="name">{advantage.name}</span>
                  <span className="description">{advantage.description}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>
  );
}

export default AboutMe;
