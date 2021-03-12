/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

import Via from '../../assets/img/project-via.jpg';
import Empreguin from '../../assets/img/plataforma-empregos.png';
import DatingSI from '../../assets/img/DatingSI.png';
import FlightNow from '../../assets/img/flight-now.png';

import './Projects.scss';

function Projects() {
  const projects = [
    {
      name: 'Victor Julio Fotografia - Website institucional responsivo para o fotógrafo Victor Julio.',
      img: 'https://victorjulio.com.br/assets/img/meta-preview.PNG',
      imgRef: useRef(null),
    },
    {
      name: 'Selmar Engenharia - Website institucional responsivo para a empresa Selmar Engenharia.',
      img: 'https://selmarengenharia.com.br/assets/meta-preview.PNG',
      imgRef: useRef(null),
    },
    {
      name: 'Projeto VIA - Tela de controle de funcionários com gráficos.',
      img: Via,
      imgRef: useRef(null),
    },
    {
      name: 'Projeto FlightNow - Projeto educacional desenvolvido na Universidade de São Paulo, simulando uma agência de viagens.',
      img: FlightNow,
      imgRef: useRef(null),
    },
    {
      name: 'Projeto DatingSI - Projeto educacional desenvolvido na Universidade de São Paulo, onde foi criado uma plataforma de relacionamentos e chat em tempo real.',
      img: DatingSI,
      imgRef: useRef(null),
    },
    {
      name: 'Projeto Plataforma Empregos - Projeto educacional desenvolvido na Universidade de São Paulo, simulando uma plataforma de empregos.',
      img: Empreguin,
      imgRef: useRef(null),
    },
  ];

  function handleClick(project) {
    project.imgRef.current.click();
  }

  return (
    // uncompleted
    <section className="projects" id="projects">
      <div className="welcoming">Meus Projetos</div>
      <hr className="divider" />

      <div className="text">
        Abaixo encontram-se alguns dos projetos em que atuei.
      </div>

      <div className="projects-gallery">
        <SimpleReactLightbox>
          <SRLWrapper>
            {
              projects.map((project) => (
                <div key={project.name} className="wrapper">
                  <img alt={project.name} src={project.img} ref={project.imgRef} />
                  <div className="overlay" onClick={() => handleClick(project)}>Veja o trabalho</div>
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
