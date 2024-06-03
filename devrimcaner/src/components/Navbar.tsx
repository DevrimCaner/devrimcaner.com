import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const pages = [{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: 'Blog', path: '/blog' }];

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref legacyBehavior>
            <a style={{ color: 'white', textDecoration: 'none' }}>Logo</a>
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Link key={page.name} href={page.path} passHref legacyBehavior>
              <Button sx={{ color: 'white' }}>
                {page.name}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
