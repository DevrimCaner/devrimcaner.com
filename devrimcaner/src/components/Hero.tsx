import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import styles from '../styles/Home.module.css';

const Hero: React.FC = () => {
  return (
    <Box>
      <div className={styles.heroImage}>
        <div className={styles.overlay}>
          <Container>
            <Box sx={{ textAlign: 'center', height: '100%' }}>
              <Typography variant="h2" component="h1" className={styles.title}>
                Devrim Caner ÖKDEM
              </Typography>
              <Typography variant="h3" component="h2" className={styles.description}>
                Programmer
              </Typography>
            </Box>
          </Container>
        </div>
      </div>
    </Box>
  );
}

export default Hero;
