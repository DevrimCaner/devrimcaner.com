import React from 'react';
import { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
//import '../styles/globals.css';
import { CssBaseline, Container } from '@mui/material';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </>
  );
}

export default MyApp;
