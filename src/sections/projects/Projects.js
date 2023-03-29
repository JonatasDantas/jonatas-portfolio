/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef } from 'react';

import { useTranslation } from 'react-i18next';

import {
  Box, Button, Chip, Grid, Typography,
} from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import VictorJulio from '../../assets/img/projects/preview/victor-julio.png';
import MyPool from '../../assets/img/projects/preview/my-pool-framed.png';
import OneCard from '../../assets/img/projects/preview/onecard.png';
import EstoqueTotal from '../../assets/img/projects/preview/estoque-total.png';
import Trinity from '../../assets/img/projects/preview/18c09a00-a2ef-4236-99c5-5a2269cb6089.png';
import Dantas from '../../assets/img/projects/preview/chacara-dantas.png';

import './Projects.scss';

function Projects() {
  const { t } = useTranslation();

  const PROPERTIES = {
    WEB: t('projects.properties.web'),
    MOBILE: t('projects.properties.mobile'),
    DESIGN: t('projects.properties.designByMe'),
    PLATFORM: t('projects.properties.platform'),
    REACT: 'ReactJS',
    FLUTTER: 'Flutter',
    TYPESCRIPT: 'Typescript',
    ANGULAR: 'Angular',
    NODEJS: 'NodeJS',
    SQL: 'SQL',
    AWS: 'AWS',
  };

  const projects = [
    {
      name: t('projects.titles.myPool'),
      properties: [PROPERTIES.MOBILE, PROPERTIES.FLUTTER, PROPERTIES.DESIGN],
      img: MyPool,
      imgRef: useRef(null),
    },
    {
      name: t('projects.titles.oneCard'),
      properties: [PROPERTIES.MOBILE, PROPERTIES.WEB, PROPERTIES.TYPESCRIPT],
      img: OneCard,
      imgRef: useRef(null),
    },
    {
      name: t('projects.titles.victorJulio'),
      description: 'Website institucional responsivo para o fotógrafo Victor Julio',
      properties: [PROPERTIES.WEB, PROPERTIES.ANGULAR, PROPERTIES.DESIGN],
      img: VictorJulio,
      imgRef: useRef(null),
    },
    {
      name: t('projects.titles.trinity'),
      description: 'Website institucional responsivo para o fotógrafo Victor Julio',
      properties: [PROPERTIES.WEB, PROPERTIES.REACT, PROPERTIES.DESIGN],
      img: Trinity,
      imgRef: useRef(null),
    },
    {
      name: t('projects.titles.estoqueTotal'),
      properties: [PROPERTIES.PLATFORM, PROPERTIES.REACT, PROPERTIES.NODEJS, PROPERTIES.SQL],
      img: EstoqueTotal,
      imgRef: useRef(null),
    },
    {
      name: t('projects.titles.chacaraDantas'),
      properties: [PROPERTIES.WEB, PROPERTIES.REACT, PROPERTIES.DESIGN],
      img: Dantas,
      imgRef: useRef(null),
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="welcoming">{t('projects.title')}</div>
      <hr className="divider" />

      <div className="text">
        {t('projects.info')}
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid className="projects-grid" container>
          {
              projects.map((project) => (
                <Grid className="project-item" item container key={project.name} xs={12} sm={6} spacing={4}>
                  {/* <Grid className="image-container" item xs={6}> */}
                  <img className="project-image" alt={project.name} src={project.img} ref={project.imgRef} />
                  <div className="project-properties">
                    {
                      project.properties.map((property) => (
                        <Chip label={property} color="inherit" />
                      ))
                      }
                  </div>
                  <Typography className="title">{project.name}</Typography>
                  <Button
                    color="default"
                    size="small"
                    className="check-project-button"
                    endIcon={<ArrowForward />}
                    onClick={() => { window.location.href = '#about-me'; }}
                  >
                    Veja o projeto
                  </Button>
                </Grid>
              ))
        }
        </Grid>
      </Box>
    </section>
  );
}

export default Projects;
