import { extendTheme, Theme } from '@mui/joy/styles';

const neonGreen = {
  50: '#e6fff5',
  100: '#b3ffe0',
  200: '#80ffcc',
  300: '#4dffb8',
  400: '#1affa3',
  500: '#00ff93', // main neon green
  600: '#00e683',
  700: '#00cc73',
  800: '#00b363',
  900: '#009953',
};

// Extend Joy UI theme
const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: '#0a1512', // very dark background
          surface: '#0f1e19',
        },
        primary: {
          solidBg: neonGreen[500],
          solidHoverBg: neonGreen[400],
          plainColor: neonGreen[500],
          outlinedBorder: neonGreen[500],
          // You can add more shades if needed
        },
        neutral: {
          softBg: '#102e24',
          softColor: neonGreen[100],
        },
        // Add custom custom colors if desired:
        // e.g. custom success, warning, etc.
      },
    },
    light: {
      palette: {
        background: {
          body: '#f9fdfb', // very dark background
          surface: '#fff',
        },
        primary: {
          solidBg: neonGreen[500],
          solidHoverBg: neonGreen[400],
          plainColor: neonGreen[500],
          outlinedBorder: neonGreen[500],
          // You can add more shades if needed
        },
        neutral: {
          // default text / secondary
          solidBg: '#2a2d47',
        },
        // Add custom custom colors if desired:
        // e.g. custom success, warning, etc.
      },
    },
  },

  fontFamily: {
    body: '"Inter", system-ui, -apple-system, sans-serif',
    display: '"Inter", system-ui, -apple-system, sans-serif',
  },

  typography: {
    // custom variant you can use via sx or component overrides
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h6: {
      textDecoration: 'underline',
      textDecorationColor: neonGreen[500],
    },
  },

  components: {
    // Example: customize Button globally
    JoyButton: {
      variants: [
        {
          props: { variant: 'solid', color: 'primary' },
          style: {
            borderRadius: 8,
            textTransform: 'uppercase',
            fontWeight: 600,
            // Base style:
            boxShadow: '0 0 12px rgba(0, 255, 147, 0.6)',
            transition: 'transform .2s, box-shadow .2s',
            // Custom hover set via ":hover"
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: '0 0 24px rgba(0, 255, 147, 0.9)',
            },
          },
        },
      ],
    },
    JoyLink: {
      styleOverrides: {
        root: {
          position: 'relative',
          color: neonGreen[500],
          textDecoration: 'none',
          fontWeight: 500,
          '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: neonGreen[400],
          },
        },
      },
    },
    JoyStack:{
        defaultProps: {
        useFlexGap: true,
      },
    }
  },
});

export default theme;
