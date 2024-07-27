import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { CssBaseline, Container, Box } from '@mui/material';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Box>    
      <CssBaseline />
      <Component {...pageProps} />
    </Box>
  );
}

export default MyApp;
