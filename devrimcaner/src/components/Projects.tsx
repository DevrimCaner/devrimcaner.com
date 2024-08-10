import React from 'react';
import { Grid, Card, CardContent, Typography, Chip, Box, Link } from '@mui/material';

interface ProjectProps {
  projects: {
    title: string;
    madeAt: string;
    date: string;
    description: string;
    technologies: string[];
    links: { label: string; url: string }[];
  }[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <section id="projects">
      <Typography variant="h4" component="h2" sx={{ marginTop: 5 }}>
        Projects
      </Typography>

      <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} key={index}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {project.title} @ {project.madeAt}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {project.date}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {project.description}
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                {project.links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ display: 'block', marginBottom: 1 }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
              <Box sx={{ marginTop: 2 }}>
                {project.technologies.map((tech, idx) => (
                  <Chip
                    key={idx}
                    label={tech}
                    sx={{ marginRight: 1, marginBottom: 1 }}
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </section>
  );
}

export default Projects;
