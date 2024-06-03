import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';

const Heading: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md>
          <Box className="box">
            <Typography variant="h3" align="center">Section 1</Typography>
            <Typography variant="body1" align="center">This is the content of section 1.</Typography>
            <img src="https://placehold.co/600x400" style={{maxWidth:'100%'}} alt="placeholder" />

          </Box>
        </Grid>
        <Grid item xs={12} md>
          <Box className="box">
            <Typography variant="h3" align="center">Section 2</Typography>
            <Typography variant="body1" align="center">This is the content of section 2.</Typography>
            <img src="https://placehold.co/600x400" style={{maxWidth:'100%'}} alt="placeholder" />

          </Box>
        </Grid>
        <Grid item xs={12} md>
          <Box className="box">
            <Typography variant="h3" align="center">Section 3</Typography>
            <Typography variant="body1" align="center">This is the content of section 3.</Typography>
            <img src="https://placehold.co/600x400" style={{maxWidth:'100%'}} alt="placeholder" />

          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Heading;
