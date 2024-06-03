import React from 'react';
import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to My Next.js App
      </Typography>
      
    </Container>
  );
}

export default Home;
