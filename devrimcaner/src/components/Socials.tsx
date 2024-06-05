import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import { Facebook, YouTube, Twitter, Instagram, GitHub, LinkedIn } from '@mui/icons-material';
import SocialCard from './SocialCard';
import { Description } from '@mui/icons-material';

const elemets = [0,1,2,3,4,5,6,7,8,9];
const socials = [
    {
        icon: <Facebook style={{color:'#3b5998'}}/>,
        title: 'Facebook',
        description: 'Follow us on Facebook',
        link: 'https://www.facebook.com/',
        color: '#3b5998',
      },
      {
        icon: <Twitter style={{color:'#1da1f2'}}/>,
        title: 'Twitter',
        description: 'Follow us on Twitter',
        link: 'https://www.twitter.com/',
        color: '#1da1f2',
      },
      {
        icon: <Instagram style={{color:'#e4405f'}}/>,
        title: 'Instagram',
        description: 'Follow us on Instagram',
        link: 'https://www.instagram.com/',
        color: '#e4405f',
      },
      {
        icon: <YouTube style={{color:'#ff0000'}}/>,
        title: 'Youtube',
        description: 'Follow us on Youtube',
        link: 'https://www.instagram.com/',
        color: '#ff0000',
      },
      {
        icon: <GitHub style={{color:'#171515'}}/>,
        title: 'GitHub',
        description: 'Follow us on Youtube',
        link: 'https://www.instagram.com/',
        color: '#171515',
      },
      {
        icon: <LinkedIn style={{color:'#0077b5'}}/>,
        title: 'LinkedIn',
        description: 'Follow us on Youtube',
        link: 'https://www.instagram.com/',
        color: '#0077b5',
      },
];

const Socials: React.FC = () => {
  return (
    <Container style={{marginTop: '50px', marginBottom: '50px'}}>
        <Typography variant="h3" align="center">Socials</Typography>
        <Grid container spacing={2} style={{marginTop: '30px'}}>
            {socials.map((social, index) => (
                <Grid item xs={12} sm={6} md={4} xl={3}>
                    <SocialCard
                        key={index}
                        icon={social.icon}
                        title={social.title}
                        description={social.description}
                        link={social.link}
                        color={social.color}
                    />
                </Grid>
            ))}
        </Grid>
    </Container>
  );
}

export default Socials;
