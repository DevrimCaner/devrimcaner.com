import React from 'react';
import { Typography } from '@mui/material';
import Skills from './Skills';

const About: React.FC = () => {
  return (
    <section id="about">

      <Typography variant="h4" component="h2" sx={{ marginTop: 5 }}>
        About
      </Typography>
      <Typography variant="body1" component="p">
      I'm a Software Developer with 5 years of experience in the hosting industry. I've had a passion for computers and games since childhood and that passion evolved into software development. I've worked on various web projects and I'm eager to learn more. I have a passion for creating user-friendly interfaces and software that consumers will love. I am dedicated to examining open-source projects and continuously improving myself by staying up-to-date with emerging technologies. I take pleasure in contributing to team-oriented projects by fulfilling my tasks thoroughly and making valuable contributions with my problem-solving skills.
      </Typography>
      {/*<Skills />*/}
    </section>
  );
}

export default About;
