import { CssVarsProvider, useColorScheme, IconButton, Box } from '@mui/joy';
import { IconSun, IconMoon } from '@tabler/icons-react';
import type { ReactNode } from 'react';
import theme from '../theme/theme';

const ModeToggle = () => {
  const { mode, setMode } = useColorScheme();
  const isDark = mode !== 'light';

  return (
    <IconButton
      variant="outlined"
      size="sm"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setMode(isDark ? 'light' : 'dark')}
      sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}
    >
      {isDark ? <IconSun aria-hidden="true" size={18} /> : <IconMoon aria-hidden="true" size={18} />}
    </IconButton>
  );
};

export const LayoutProvider = ({ children }: { children: ReactNode }) => (
  <CssVarsProvider defaultMode="dark" theme={theme}>
    <ModeToggle />
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
