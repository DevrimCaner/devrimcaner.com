import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Chip, Box } from '@mui/material';

interface ProjectCardProps {
  image: string;
  title: string;
  date: string;
  categories: object;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, date, categories, description }) => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={4} xl={5}>
          <CardMedia
            component="img"
            height="100%"
            image={image}
            alt={title}
          />
        </Grid>
        <Grid item xs={12} md={8} xl={7}>
          <CardContent>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {date}
            </Typography>
            <Box my={1}>
              {categories.map((category, index) => (
                <Chip label={category} color="primary" style={{backgroundColor:"#555"}}/>
            ))}
            </Box>
            <Typography variant="body2">
              {description}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ProjectCard;
