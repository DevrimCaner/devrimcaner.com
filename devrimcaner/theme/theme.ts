import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  // Global Settings
  typography: {
    // Fonts
  },
  components: {
    JoyLink: {
      defaultProps: {
        color: 'primary',
        underline: 'none',
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
          position: 'relative',
          '&:hover': {
            textDecoration: 'none',
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: -2,
            height: '2px',
            background: 'currentColor',
            opacity: 0,
            transition: 'opacity .2s ease',
          },
          '&:hover:after': {
            opacity: 0.7,
          },
        },
      },
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#00FF7F', // neon green
          solidColor: '#000',
          plainColor: '#00FF7F',
          outlinedBorder: '#00FF7F',
        },
        background: {
          body: '#f0f2f5', // light bg
          surface: '#ffffff', // card bg
        },
        text: {
          // overrides
        },
        neutral: {
          // normal text / border colors
        },
      },
    },
    dark: {
      palette: {
        primary: {
          solidBg: '#39FF14', // neon green
          solidColor: '#000',
          plainColor: '#39FF14',
          outlinedBorder: '#39FF14',
        },
        background: {
          body: '#0f111a', // dark bg
          surface: '#1d1f33', // card
        },
        text: {
          // light colors
        },
      },
    },
  },
});

export default theme;
