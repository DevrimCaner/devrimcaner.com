import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: 'Blog', path: '/blog' }];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250
       }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List >
        {pages.map((page) => (
          <ListItem button key={page.name}>
            <Link href={page.path} passHref legacyBehavior>
              <ListItemText primary={page.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          
          <Box sx={{ display: 'flex', maxHeight: '55px'}} >
            <Link href="/" passHref legacyBehavior>
              <a style={{ color: 'white', textDecoration: 'none' }}>
              <img src="https://placehold.co/180x55?text=LOGO" style={{height: '100%'}} alt="Home" />
              </a>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.name} href={page.path} passHref legacyBehavior>
                <Button sx={{ color: 'white' }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{
        background: 'rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        boxShadow: 'none',
       }}
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: '#ecf0f1'
          },
        }}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default Navbar;
