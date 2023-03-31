import { useTranslation } from 'react-i18next';

import {
  Box, Button, Chip, Grid, Typography,
} from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { getProjects } from '../../utils/projectsHelper';

import './Projects.scss';

function Projects() {
  const { t } = useTranslation();
  const projects = getProjects(t);

  return (
    <section className="projects" id="projects">
      <div className="welcoming">{t('projects.title')}</div>
      <hr className="divider" />

      <div className="text">{t('projects.info')}</div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid className="projects-grid" container>
          {projects.map((project) => (
            <Grid
              className="project-item"
              item
              container
              key={project.name}
              xs={12}
              sm={6}
              spacing={4}
              onClick={() => {
                window.location.href = `/project/${project.id}`;
              }}
            >
              {/* <Grid className="image-container" item xs={6}> */}
              <img
                className="project-image"
                alt={project.name}
                src={project.img}
                ref={project.imgRef}
              />
              <div className="project-properties">
                {project.properties.map((property) => (
                  <Chip label={property} color="inherit" />
                ))}
              </div>
              <Typography className="title">{project.name}</Typography>
              <Button
                color="default"
                size="small"
                className="check-project-button"
                endIcon={<ArrowForward />}
                onClick={() => {
                  window.location.href = `/project/${project.id}`;
                }}
              >
                {t('projects.check')}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
}

export default Projects;
