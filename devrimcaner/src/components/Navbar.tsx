import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Box } from '@mui/material';

interface NavbarProps {
  onThemeChange: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onThemeChange }) => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
          <Box sx={{flexGrow:1}}/>
          <Switch onChange={onThemeChange} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
