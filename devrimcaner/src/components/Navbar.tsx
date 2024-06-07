import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button, Box, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/Navbar.module.css';

const pages = [{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: 'Blog', path: '/blog' }];

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" className={styles.navbar}>
        <Toolbar className={styles.toolbar}>
          <Box className={styles.logoContainer}>
            <Link href="/" passHref legacyBehavior>
              <a className={styles.logoLink}>
                <img src="https://XXplacehold.co/180x55?text=LOGO" className={styles.logoImage} alt="Home" />
              </a>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} className={styles.navLinks}>
            {pages.map((page) => (
              <Link key={page.name} href={page.path} passHref legacyBehavior>
                <Button sx={{ color: 'white' }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          className: styles.drawerPaper,
        }}
      >
        <Box
      sx={{
        width: 250
       }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem button key={page.name}>
            <Link href={page.path} passHref legacyBehavior>
              <ListItemText primary={page.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
      </Drawer>
    </>
  );
}

export default Navbar;
