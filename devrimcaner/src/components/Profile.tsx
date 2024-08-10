import React from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import Navigation from '@/components/Navigation';

const StickyBox = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: theme.spacing(11.25), // 90px
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
        Devrim ÖKDEM
      </Typography>
      <Typography variant="h4" component="h2">
        Programmer
      </Typography>
      <Typography variant="body1" component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Typography>
      
      <Navigation />

      {/*
      Filters and Socials gonna Add
      */}

    </StickyBox>
  );
}

export default Profile;
