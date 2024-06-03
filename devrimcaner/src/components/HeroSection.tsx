import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import styles from '../styles/Home.module.css';

const HeroSection: React.FC = () => {
  return (
    <Box>
      <div className={styles.heroImage}>
        <div className={styles.overlay}>
          <Container>
            <Box sx={{ textAlign: 'center', height: '100%' }}>
              <Typography variant="h2" component="h1" className={styles.title}>
                Welcome to My Next.js App
              </Typography>
            </Box>
          </Container>
        </div>
      </div>
    </Box>
  );
}

export default HeroSection;
