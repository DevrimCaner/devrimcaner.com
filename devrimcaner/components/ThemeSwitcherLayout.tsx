import { Box, CssVarsProvider, Switch, useColorScheme } from '@mui/joy';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { useEffect, type ReactNode } from 'react';
import theme from '../theme/theme';

const STORAGE_KEY = 'portfolio-theme';

export const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const resolvedMode = mode ?? 'dark';

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      setMode(stored);
      return;
    }

    setMode('dark');
  }, [setMode]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, mode ?? 'dark');
  }, [mode]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.checked ? 'dark' : 'light');
  };

  const isDark = resolvedMode === 'dark';

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
          '& .JoySwitch-track': {
            backgroundColor: 'neutral.softBg',
            border: '1px solid',
            borderColor: 'neutral.outlinedBorder',
            boxShadow: 'none',
          },
          '& .JoySwitch-thumb': {
            backgroundColor: 'background.surface',
            boxShadow: 'none',
          },
          '& .JoySwitch-input:checked + .JoySwitch-track': {
            backgroundColor: 'primary.solidBg',
            borderColor: 'primary.outlinedBorder',
          },
          '& .JoySwitch-input:focus-visible + .JoySwitch-track': {
            boxShadow: '0 0 0 3px rgba(0, 255, 147, 0.24)',
          },
          '&:hover .JoySwitch-track': {
            opacity: 0.95,
          },
        }}
      />
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
