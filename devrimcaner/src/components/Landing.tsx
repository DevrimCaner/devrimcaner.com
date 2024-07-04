import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import Socials from './Socials';

const Landing: React.FC = () => {
  return (
    <Container style={{margin: "90px"}}>
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={6}>
          <Box className="box">
            <Typography variant="h3" align="center">
              <img src="https://placehold.co/128x128/3d3d3d/png" style={{borderRadius: '50%', width: '128px', height: ''}} alt="placeholder" />
            </Typography>

            <Typography variant="h3" component="h1" align="center">Devrim Caner ÖKDEM</Typography>
            <Typography variant="h4" component="h2" align="center">Programmer</Typography>

          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Socials />
        </Grid>

      </Grid>
    </Container>
  );
}

export default Landing;
