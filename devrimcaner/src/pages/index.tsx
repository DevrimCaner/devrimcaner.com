import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import styles from '../styles/Home.module.css';
import HeroSection from '@/components/HeroSection';
const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
}

export default Home;
