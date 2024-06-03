import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
                    Logo
                </Typography>
                <Box>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/projects">Projects</Button>
                    <Button color="inherit" component={Link} to="/blog">Blog</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
