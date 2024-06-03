import React from 'react';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
//import '../styles/globals.css';
import { CssBaseline, Container, Box } from '@mui/material';
import Footer from '@/components/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Box>    
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Box>
  );
}

export default MyApp;
