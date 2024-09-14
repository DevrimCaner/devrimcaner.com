import React, {useState, useEffect} from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { lightTheme, darkTheme } from '../themes/themes';
import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';
import Navbar from '@/components/Navbar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Kullanıcının tercihini localStorage'dan al
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const handleThemeChange = () => {
    // Tema değiştir
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // Tercihi localStorage'da sakla
    localStorage.setItem('theme', newTheme);
  };
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Navbar onThemeChange={handleThemeChange} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;