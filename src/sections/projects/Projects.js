/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

import { useTranslation } from 'react-i18next';

import VictorJulio from '../../assets/img/projects/victor-julio-landing.png';
import Selmar from '../../assets/img/projects/selmar.png';
import Via from '../../assets/img/projects/project-via.jpg';
import Empreguin from '../../assets/img/projects/plataforma-empregos.png';
import DatingSI from '../../assets/img/projects/DatingSI.png';
import FlightNow from '../../assets/img/projects/flight-now.png';
import EstoqueTotal from '../../assets/img/projects/estoque-total.PNG';

import './Projects.scss';

function Projects() {
  const { t } = useTranslation();
  const projects = [
    {
      name: t('projects.victorJulio'),
      img: VictorJulio,
      imgRef: useRef(null),
    },
    {
      name: t('projects.selmar'),
      img: Selmar,
      imgRef: useRef(null),
    },
    {
      name: t('projects.estoqueTotal'),
      img: EstoqueTotal,
      imgRef: useRef(null),
    },
    {
      name: t('projects.via'),
      img: Via,
      imgRef: useRef(null),
    },
    {
      name: t('projects.flightnow'),
      img: FlightNow,
      imgRef: useRef(null),
    },
    {
      name: t('projects.empregos'),
      img: Empreguin,
      imgRef: useRef(null),
    },
    {
      name: t('projects.datingSI'),
      img: DatingSI,
      imgRef: useRef(null),
    },
  ];

  function handleClick(project) {
    project.imgRef.current.click();
  }

  return (
    // uncompleted
    <section className="projects" id="projects">
      <div className="welcoming">{t('projects.title')}</div>
      <hr className="divider" />

      <div className="text">
        {t('projects.info')}
      </div>

      <div className="projects-gallery">
        <SimpleReactLightbox>
          <SRLWrapper>
            {
              projects.map((project) => (
                <div key={project.name} className="wrapper">
                  <img alt={project.name} src={project.img} ref={project.imgRef} />
                  <div className="overlay" onClick={() => handleClick(project)}>{t('projects.check')}</div>
                </div>
              ))
            }
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </section>
  );
}

export default Projects;
