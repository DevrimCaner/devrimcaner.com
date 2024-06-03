import React from 'react';
import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';

const Projects: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Projects Page
      </Typography>
      <Typography variant="body1" paragraph>
        This is the projects page.
      </Typography>
    </Container>
  );
}

export default Projects;
