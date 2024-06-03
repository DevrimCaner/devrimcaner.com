import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>
            <NavBar />
            <Container>
                <h1>Home</h1>

            </Container>
            <Footer />
        </>
    );
}

export default HomePage;
