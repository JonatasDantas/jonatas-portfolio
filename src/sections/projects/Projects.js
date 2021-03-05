import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

import Via from '../../assets/img/project-via.jpg';

import './Projects.scss';

function Projects() {
  const projects = [
    { name: 'Victor Julio Fotografia', img: 'https://victorjulio.com.br/assets/img/meta-preview.PNG' },
    { name: 'Selmar Engenharia', img: 'https://selmarengenharia.com.br/assets/meta-preview.PNG' },
    { name: 'Projeto VIA', img: Via },
  ];

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
                                <img alt={project.name} src={project.img} />
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
