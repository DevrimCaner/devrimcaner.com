import React from 'react';
import { Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';

const socialLinks = [
  {
    icon: <GitHub />,
    label: 'GitHub',
    link: 'https://github.com',
  },
  {
    icon: <LinkedIn />,
    label: 'LinkedIn',
    link: 'https://linkedin.com',
  },
  {
    icon: <Twitter />,
    label: 'Twitter',
    link: 'https://twitter.com',
  },
  {
    icon: <Instagram />,
    label: 'Instagram',
    link: 'https://instagram.com',
  },
];

const Socials: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        display: 'flex',
        paddingY: 2,
        zIndex: 1,
      }}
    >
      {socialLinks.map((social, index) => (
      <IconButton href={social.link} target="_blank" aria-label={social.label}>
        {social.icon}
      </IconButton>
      ))}
    </Box>
  );
};

export default Socials;
