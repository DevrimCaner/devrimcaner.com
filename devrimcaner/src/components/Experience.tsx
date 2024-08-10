
import React from 'react';
import { Grid, Card, CardContent, Typography, Chip, Box } from '@mui/material';

interface ExperienceProps {
  experiences: {
    title: string;
    company: string;
    date: string;
    description: string;
    technologies: string[];
  }[];
}


const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience">
      <Typography variant="h4" component="h2" sx={{ marginTop: 5 }}>
        Experience
      </Typography>
      <Grid container spacing={4}>
      {experiences.map((exp, index) => (
        <Grid item xs={12} key={index}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {exp.title} @ {exp.company}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {exp.date}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {exp.description}
              </Typography>
              <Box sx={{ marginTop: 2 }}>
                {exp.technologies.map((tech, idx) => (
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

export default Experience;
