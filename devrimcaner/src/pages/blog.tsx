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
    </Container>
  );
}

export default Blog;
