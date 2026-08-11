import { Box, CssVarsProvider, Switch, useColorScheme } from '@mui/joy';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useEffect, useState, type ReactNode } from 'react';
import theme from '../theme/theme';

const STORAGE_KEY = 'portfolio-theme';

export const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  // `mode` is undefined until CssVarsProvider mounts and reads localStorage on
  // the client, and the server always renders with `defaultMode`. Rendering
  // a *guessed* checked/unchecked state in that gap is what caused the stuck
  // "Mui-checked" hydration mismatch — instead we render an inert, markup-
  // identical placeholder until we're mounted, then swap to the real control
  // once `mode` is guaranteed to reflect the actual stored scheme.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked ? 'dark' : 'light');
  };

  const isDark = mode === 'dark';

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 0.5,
        py: 0.25,
        borderRadius: '999px',
        backgroundColor: 'neutral.softBg',
      }}
    >
      <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
        <IconSun size={14} aria-hidden="true" />
      </Box>
      {mounted ? (
        <Switch
          checked={isDark}
          color="success"
          onChange={handleChange}
          size="sm"
          slotProps={{
            input: {
              'aria-label': isDark ? 'Switch to light mode' : 'Switch to dark mode',
            },
          }}
          sx={{
            '--Switch-trackWidth': '36px',
            '--Switch-trackHeight': '20px',
            '--Switch-thumbSize': '14px',
            // Joy's Switch utility classes are `MuiSwitch-*` (generateUtilityClasses),
            // not `JoySwitch-*` — the old selectors here never matched, so the
            // track/thumb silently fell back to the default `color="success"`
            // solid green in every scheme, unrelated to the hydration fix above.
            '& .MuiSwitch-track': {
              backgroundColor: 'neutral.softBg',
              border: '1px solid',
              borderColor: 'neutral.outlinedBorder',
              boxShadow: 'none',
            },
            '& .MuiSwitch-thumb': {
              backgroundColor: 'background.surface',
              boxShadow: 'none',
            },
            '& .MuiSwitch-input:checked + .MuiSwitch-track': {
              backgroundColor: 'primary.solidBg',
              borderColor: 'primary.outlinedBorder',
            },
            '& .MuiSwitch-input:focus-visible + .MuiSwitch-track': {
              boxShadow: '0 0 0 3px rgba(0, 255, 147, 0.24)',
            },
            '&:hover .MuiSwitch-track': {
              opacity: 0.95,
            },
          }}
        />
      ) : (
        // Markup-identical, non-interactive placeholder: server and the
        // pre-mount client render must match exactly, or the *next* render
        // (once `mode` resolves) leaves the real Switch's DOM classes stuck
        // on whatever the server guessed — see the audit notes in theme.ts.
        <Box
          aria-hidden="true"
          sx={{
            width: '36px',
            height: '20px',
            borderRadius: '999px',
            backgroundColor: 'neutral.softBg',
            border: '1px solid',
            borderColor: 'neutral.outlinedBorder',
          }}
        />
      )}
      <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
        <IconMoon size={14} aria-hidden="true" />
      </Box>
    </Box>
  );
};

export const LayoutProvider = ({ children }: { children: ReactNode }) => (
  <CssVarsProvider defaultMode="dark" modeStorageKey={STORAGE_KEY} theme={theme}>
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.body',
        color: 'text.primary',
        transition: 'background .2s ease, color .2s ease',
      }}
    >
      {children}
    </Box>
  </CssVarsProvider>
);
