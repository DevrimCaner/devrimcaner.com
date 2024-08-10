import React from 'react';
import { Grid, Container } from '@mui/material';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tech Corp',
    date: '2023-present',
    description: 'Worked on developing scalable web applications.',
    technologies: ['JavaScript', 'React', 'Node.js'],
  },
  {
    title: 'Frontend Developer',
    company: 'Design Studio',
    date: '2021-2023',
    description: 'Focused on creating beautiful and functional UI components.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
  },
];

const Home: React.FC = () => {
  return (
    <Container sx={{ marginTop: 11.25 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Profile />
        </Grid>
        <Grid item xs={12} md={6}>
          <About />
          <Experience experiences={experiences}/>
          <Projects />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
