import React from 'react';
import { Grid, Container } from '@mui/material';
import Profile from '@/components/Profile';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

const Home: React.FC = () => {
  return (
    <Container sx={{ marginTop: 11.25 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Profile />
        </Grid>
        <Grid item xs={12} md={6}>
          <About />
          <Experience />
          <Projects />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
