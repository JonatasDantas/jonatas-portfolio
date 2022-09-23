import Slider from 'react-slick';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

import JavascriptLogo from '../../assets/img/technologies/javascript.png';
import AngularLogo from '../../assets/img/technologies/angular.png';
import ReactLogo from '../../assets/img/technologies/react.png';
import VueLogo from '../../assets/img/technologies/vue.png';
import NodeLogo from '../../assets/img/technologies/nodejs.png';
import JavaLogo from '../../assets/img/technologies/java.png';
// import SpringBootLogo from '../../assets/img/technologies/spring-boot.png';
import IonicLogo from '../../assets/img/technologies/ionic.png';
import FlutterLogo from '../../assets/img/technologies/flutter.png';
import SQLLogo from '../../assets/img/technologies/sql.jpg';
import DockerLogo from '../../assets/img/technologies/docker.png';
import LinuxLogo from '../../assets/img/technologies/linux.jpg';
import AWSLogo from '../../assets/img/technologies/aws.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skill.scss';

function Skills() {
  const { t } = useTranslation();
  const settings = {
    dots: true,
    infinite: true,
    speed: !isMobile ? 2500 : 1500,
    arrows: true,
    slidesToShow: !isMobile ? 6 : 3,
    slidesToScroll: !isMobile ? 6 : 3,
    autoplay: true,
    autoplaySpeed: !isMobile ? 5000 : 2000,
    draggable: false,
  };

  const skills = [
    {
      name: 'Javascript',
      logo: JavascriptLogo,
    },
    {
      name: 'Angular',
      logo: AngularLogo,
    },
    {
      name: 'React & React Native',
      logo: ReactLogo,
    },
    {
      name: 'Vue.js',
      logo: VueLogo,
    },
    {
      name: 'Node.js',
      logo: NodeLogo,
    },
    {
      name: 'Java',
      logo: JavaLogo,
    },
    // {
    //   name: 'Spring Boot',
    //   logo: SpringBootLogo,
    // },
    {
      name: 'Ionic',
      logo: IonicLogo,
    },
    {
      name: 'Flutter',
      logo: FlutterLogo,
    },
    {
      name: 'AWS',
      logo: AWSLogo,
    },
    {
      name: 'SQL',
      logo: SQLLogo,
    },
    {
      name: 'Linux',
      logo: LinuxLogo,
    },
    {
      name: 'Docker',
      logo: DockerLogo,
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="welcoming">{t('skills.title')}</div>
      <hr className="divider" />

      <div className="text">
        {t('skills.info.introduction')}
        <br />
        <br />
        {t('skills.info.technologies')}
      </div>

      <Slider {...settings}>
        {
                    skills.map((skill) => (
                      <div className="skill" key={skill.name}>
                        <img alt={skill.name} src={skill.logo} />
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))
                }
      </Slider>

    </section>
  );
}

export default Skills;
