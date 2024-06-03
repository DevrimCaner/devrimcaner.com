import React from 'react';
import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';

const Blog: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Blog Page
      </Typography>
      <Typography variant="body1" paragraph>
        This page is under construction.
      </Typography>
      <img src="https://placehold.co/1920x1080" style={{maxWidth:'100%'}} alt="placeholder" />

    </Container>
  );
}

export default Blog;
