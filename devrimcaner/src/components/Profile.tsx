import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Navigation from '@/components/Navigation';
import Socials from '@/components/Socials';

const StickyBox = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: theme.spacing(10), // Same with About h2 marginTop
  [theme.breakpoints.down('xs')]: {
    position: 'static',
  },
}));

const Profile: React.FC = () => {
  return (
    <StickyBox>
      <Typography variant="h3" component="div">
        <img
          src="/images/profile.jpeg"
          alt="Devrim Caner ÖKDEM"
          style={{ borderRadius: '50%', width: '30%' }}
        />
      </Typography>
      <Typography variant="h3" component="h1">
        Devrim C. ÖKDEM
      </Typography>
      <Typography variant="h4" component="h2">
        Programmer
      </Typography>
      <Socials />
      <Typography variant="body1" component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      
      <Navigation />

    </StickyBox>
  );
}

export default Profile;
