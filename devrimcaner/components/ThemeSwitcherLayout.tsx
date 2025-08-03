import { useState, useEffect } from 'react';
import { CssVarsProvider, useColorScheme, IconButton, Box } from '@mui/joy';
import { IconSun, IconMoon } from '@tabler/icons-react';
import theme from '../theme/theme';

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <IconButton
      variant="outlined"
      size="sm"
      aria-label="Toggle theme"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}
    >
      {mounted ? (mode === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />) : null}
    </IconButton>
  );
};

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => (
  <CssVarsProvider theme={theme} defaultMode="dark">
    <ModeToggle />
    <Box
      component="div"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.body',
        color: 'text.primary',
        transition: 'background .2s ease, color .2s ease',
        '&': {
          margin: 0,
        },
      }}
    >
      {children}
    </Box>
  </CssVarsProvider>
);
