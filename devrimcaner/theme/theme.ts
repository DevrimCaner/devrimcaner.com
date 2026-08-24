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
          // Joy derives every unset state (hover/active/soft/...) from this
          // numeric 50-900 scale via CSS vars — e.g. solidActiveBg resolves to
          // var(--joy-palette-primary-700). Without this, that fallback was
          // Joy's own default blue scale, which is what flashed blue on press
          // even though solidBg/solidHoverBg below were already green.
          ...neonGreen,
          solidBg: neonGreen[500],
          solidHoverBg: neonGreen[400],
          solidActiveBg: neonGreen[600],
          plainColor: neonGreen[500], // link will pick this
          outlinedBorder: neonGreen[500],
        },
        neutral: {
          softBg: '#102e24',
          softColor: neonGreen[100],
        },
        // Same fallback issue as primary-700 above: unset, this defaults to
        // Joy's own primary-500 (blue), so every default focus ring —
        // including IconButton's built-in :focus-visible outline — flashed
        // blue instead of theme green.
        focusVisible: neonGreen[500],
      },
    },
    light: {
      palette: {
        background: {
          body: '#f4f9f6',
          surface: '#fff',
        },
        primary: {
          ...neonGreen,
          solidBg: neonGreen[700],
          solidHoverBg: neonGreen[100],
          solidActiveBg: neonGreen[800],
          plainColor: neonGreen[800], // light: darker green for links/text
          outlinedBorder: neonGreen[500],
        },
        neutral: {
          softBg: neonGreen[50],
          softColor: neonGreen[800],
        },
        focusVisible: neonGreen[600],
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
          color: theme.vars.palette.primary.plainColor, // CSS var: reacts to data-joy-color-scheme
          textDecoration: 'none',
          fontWeight: 500,
          '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: theme.vars.palette.primary.solidBg, // CSS var: reacts to data-joy-color-scheme
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
              backgroundColor: theme.vars.palette.neutral.softBg, // CSS var: reacts to data-joy-color-scheme
              color: theme.vars.palette.neutral.softColor, // CSS var: reacts to data-joy-color-scheme
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
