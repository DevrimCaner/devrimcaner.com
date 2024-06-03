import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import styles from '../styles/Home.module.css';
import Hero from '@/components/Hero';
import Heading from '@/components/Heading';
const Home: React.FC = () => {
  return (
    <Box>
      <Hero />
      <Heading />
      
    </Box>
  );
}

export default Home;
