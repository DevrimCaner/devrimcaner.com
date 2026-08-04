import { Box, Drawer, IconButton, Link, Option, Select, Stack } from '@mui/joy';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useMemo, useState } from 'react';
import type { LocaleCode } from '../lib/portfolio';

const STORAGE_KEY = 'portfolio-language';
const locales = [
  { code: 'en', label: 'EN' },
  { code: 'tr', label: 'TR' },
  //{ code: 'de', label: 'DE' },
] as const;

type Props = {
  onLocaleChange: (locale: LocaleCode) => void;
  locale: LocaleCode;
  modeToggle: React.ReactNode;
};

const LocaleSwitcher = ({ onLocaleChange, locale, modeToggle }: Props) => {
  const [open, setOpen] = useState(false);
  const [activeLocale, setActiveLocale] = useState<LocaleCode>(() => {
    if (typeof window === 'undefined') {
      return locale;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'tr' || stored === 'de' ? (stored as LocaleCode) : locale;
  });

  //const navItems = useMemo(() => [{ id: 'about', label: 'Home' }], []);
  const navItems = useMemo(() => [{ id: '', label: '' }], []);

  const switchLocale = (nextLocale: LocaleCode) => {
    setActiveLocale(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    onLocaleChange(nextLocale);
  };

  const renderLinks = (onClick?: () => void) => (
    <Stack spacing={1} direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: { xs: 'stretch', md: 'center' } }}>
      {navItems.map((item) => (
        <Link
          key={item.id}
          href={`#${item.id}`}
          onClick={onClick}
          sx={{
            color: 'text.primary',
            fontWeight: 600,
            textTransform: 'capitalize',
            px: 1,
            py: 0.5,
            '&:hover': { textDecoration: 'underline' },
          }}
          underline="none"
        >
          {item.label}
        </Link>
      ))}
    </Stack>
  );

  const renderLocales = () => (
    <Select
      aria-label="Select language"
      size="sm"
      value={activeLocale}
      variant="plain"
      onChange={(_, value) => {
        if (value) {
          switchLocale(value as LocaleCode);
        }
      }}
      sx={{
        minWidth: 72,
        backgroundColor: 'transparent',
        border: 'none',
        color: activeLocale ? 'primary.plainColor' : 'text.secondary',
        '& .JoySelect-button': {
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          color: activeLocale ? 'primary.plainColor' : 'text.secondary',
        },
        '& .JoySelect-indicator': {
          color: 'text.secondary',
        },
      }}
      slotProps={{
        listbox: {
          sx: {
            minWidth: 96,
            backgroundColor: 'background.surface',
            backdropFilter: 'blur(10px)',
          },
        },
      }}
    >
      {locales.map((item) => (
        <Option key={item.code} value={item.code} sx={{ color: activeLocale === item.code ? 'primary.plainColor' : 'text.secondary' }}>
          {item.label}
        </Option>
      ))}
    </Select>
  );

  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        px: { xs: 2, md: 3 },
        py: 1,
        backgroundColor: 'background.surface',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'auto minmax(0, 1fr) auto', md: 'auto minmax(0, 1fr) auto' },
          alignItems: 'center',
          columnGap: { xs: 1, md: 2 },
          maxWidth: 1200,
          mx: 'auto',
          minHeight: 40,
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0, justifySelf: 'start' }}>
          <IconButton aria-label="Open navigation menu" onClick={() => setOpen(true)} variant="plain" sx={{ display: { xs: 'inline-flex', md: 'none' } }}>
            <IconMenu2 aria-hidden="true" size={18} />
          </IconButton>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, minWidth: 0 }}>{renderLinks()}</Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 0, justifySelf: 'center' }} />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', minWidth: 0, justifySelf: 'end', gap: 0.75 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>{modeToggle}</Box>
          {renderLocales()}
        </Box>
      </Box>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} size="sm">
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton aria-label="Close navigation menu" onClick={() => setOpen(false)} variant="plain">
              <IconX aria-hidden="true" size={18} />
            </IconButton>
          </Box>
          <Stack spacing={2}>
            {renderLinks(() => setOpen(false))}
            {renderLocales()}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default LocaleSwitcher;
