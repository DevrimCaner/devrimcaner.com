import React from 'react';
import { Box, Typography, Link, Button} from '@mui/material';
const pages = [{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: 'Blog', path: '/blog' }];
const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#222', color: '#fff', py: 2, textAlign: 'center' }}>
      <Typography variant="body1">Next.js Portolio App</Typography>
    </Box>
  );
}

export default Footer;
