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
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'C#',],
  },
];
const projects = [
  {
    title: 'Portfolio Website',
    madeAt: 'Personal Project',
    date: '2024',
    description: 'A personal portfolio website to showcase my projects and skills.',
    technologies: ['React', 'TypeScript', 'Material-UI'],
    links: [
      { label: 'Live Demo', url: 'https://example.com' },
      { label: 'GitHub Repo', url: 'https://github.com/example' },
    ],
  },
  {
    title: 'E-commerce Platform',
    madeAt: 'Tech Corp',
    date: '2023',
    description: 'Developed a full-featured e-commerce platform.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/example-ecommerce' },
    ],
  },
];

const Home: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Profile />
        </Grid>
        <Grid item xs={12} md={7}>
          <About />
          <Experience experiences={experiences}/>
          <Projects projects={projects}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
