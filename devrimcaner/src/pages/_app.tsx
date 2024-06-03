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
      <Component {...pageProps} />
      <Container>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
        <h2>Test</h2>
      </Container>
    </>
  );
}

export default MyApp;
