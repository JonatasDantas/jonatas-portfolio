import { Chip, Grid, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { getProjects } from '../../utils/projectsHelper';

import './ProjectPage.scss';

export function ProjectPage({ match }) {
  const { t } = useTranslation();
  const {
    params: { projectId },
  } = match;

  const project = getProjects(t).find((e) => e.id === projectId);

  return (
    <div className="app">
      <div className="project-details">
        <Header />

        <Grid className="presentation" container>
          <Grid className="data-container" item container direction="column" xs={12} sm={12} md={6}>
            <Grid className="title" item>
              <Typography variant="h2">{project.name}</Typography>
            </Grid>
            <Grid className="info" direction="column" item>
              <Grid item>{t('projects.company')}</Grid>
              {project.company}
            </Grid>
            <Grid className="info" direction="column" item>
              <Grid item>{t('projects.characteristics')}</Grid>
              {project.properties.map((property) => (
                <Chip label={property} color="inherit" />
              ))}
            </Grid>
            {
              project.url && project.isConfidential
                ? (
                  <Grid className="info" direction="column" item>
                    <Grid item>URL</Grid>
                    <Link to={{ pathname: project.url }} target="_blank">{t('projects.access')}</Link>
                  </Grid>
                ) : (
                  <Grid className="info" direction="column" item>
                    <Grid item>URL</Grid>
                    <Chip className="confidential" label={t('projects.confidential')} color="secondary" />
                  </Grid>
                )
            }
          </Grid>
          <Grid className="image-container" item xs={12} sm={12} md={6}>
            <img className="project-image" src={project.img} alt={project.name} />
          </Grid>
        </Grid>

        <Grid className="additional-info" container direction="column">
          <div className="welcoming">{t('projects.details')}</div>
          <hr className="divider" />

          <Grid className="description" item>
            {project.description}
          </Grid>

          <Grid className="media" item container direction="column" alignItems="center">
            {
              project.media.map((media) => (
                media.type === 'VIDEO'
                  ? (
                    // eslint-disable-next-line jsx-a11y/media-has-caption
                    <video
                      controls
                      width={!media.isMobile ? '85%' : 'auto'}
                      height={media.isMobile ? '600' : 'auto'}
                    >
                      <source src={media.data} />
                    </video>
                  ) : <img src={media.data} alt={media.data} />
              ))
            }
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
