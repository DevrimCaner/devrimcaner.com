// theme.ts
import { extendTheme } from '@mui/joy/styles';

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

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: '#0a1512',
          surface: '#0f1e19',
        },
        primary: {
          solidBg: neonGreen[500],
          solidHoverBg: neonGreen[400],
          plainColor: neonGreen[500], // link will pick this
          outlinedBorder: neonGreen[500],
        },
        neutral: {
          softBg: '#102e24',
          softColor: neonGreen[100],
        },
      },
    },
    light: {
      palette: {
        background: {
          body: '#f4f9f6',
          surface: '#fff',
        },
        primary: {
          solidBg: neonGreen[700],
          solidHoverBg: neonGreen[100],
          plainColor: neonGreen[800], // light: darker green for links/text
          outlinedBorder: neonGreen[500],
        },
        neutral: {
          softBg: neonGreen[50],
          softColor: neonGreen[800],
        },
      },
    },
  },

  fontFamily: {
    body: '"Inter", system-ui, -apple-system, sans-serif',
    display: '"Inter", system-ui, -apple-system, sans-serif',
  },

  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState.variant === 'solid' && ownerState.color === 'primary') {
            return {
              borderRadius: 8,
              textTransform: 'uppercase',
              fontWeight: 600,
              boxShadow: '0 0 12px rgba(0, 255, 147, 0.6)',
              transition: 'transform .2s, box-shadow .2s',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 0 24px rgba(0, 255, 147, 0.9)',
              },
            };
          }
          return {};
        },
      },
    },
    JoyLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          position: 'relative',
          color: theme.palette.primary.plainColor, // uses per-scheme plainColor
          textDecoration: 'none',
          fontWeight: 500,
          '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: theme.palette.primary.solidBg, // hover uses primary solidBg
          },
        }),
      },
    },
    JoyChip: {
      defaultProps: {
        variant: 'soft',
        color: 'neutral',
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => {
          const isSoft = ownerState.variant === 'soft';
          return {
            borderRadius: 6,
            fontWeight: 500,
            ...(isSoft && {
              backgroundColor: theme.palette.neutral.softBg,
              color: theme.palette.neutral.softColor,
            }),
          };
        },
      },
    },
    JoyStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

export default theme;
