import React from 'react';
import Link from 'next/link';
import { Container, Typography, Grid, Box } from '@mui/material';
import ProjectCard from '@/components/ProjectCard';

const projects = [0,1,2,3,4,5];
const sampleData = {
  image: 'https://placehold.co/600x400',
  title: 'Project Name',
  date: 'February 1, 2024',
  categories:['C#','C++', 'Unity'],
  description: 'This is a short description of Project 2.',
};

const Projects: React.FC = () => {
  return (
    <Container style={{marginTop:50, marginBottom:50}}>
      <Grid container spacing={2}>
      
      {projects.map((project, index) => (
        <Grid item xs={12}>
          <ProjectCard {...sampleData}/>
        </Grid>
      ))}

      </Grid>
    </Container>
  );
}

export default Projects;
