import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          solidBg: '#39FF14', // Neon green
          solidColor: '#000',
        },
        background: {
          body: '#0A0A0A', // Deep dark
        },
      },
    },
  },
});

export default theme;
