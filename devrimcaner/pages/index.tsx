import Head from 'next/head';
import { useMemo, useState } from 'react';
import { Box } from '@mui/joy';
import About from '../components/About';
import Experience from '../components/Experience';
import Navigation from '../components/Navigation';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import LocaleSwitcher from '../components/LocaleSwitcher';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { ModeToggle } from '../components/ThemeSwitcherLayout';
import type { LocaleCode, PortfolioData } from '../lib/portfolio';
import enData from '../data/en.json';
import trData from '../data/tr.json';
import { site } from '../lib/site';

const localeModules = {
  en: enData as PortfolioData,
  tr: trData as PortfolioData,
} as const;

const STORAGE_KEY = 'portfolio-language';

const getStoredLocale = (): LocaleCode => {
  if (typeof window === 'undefined') {
    return 'en';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'en' || stored === 'tr' ? (stored as LocaleCode) : 'en';
};

export default function Home() {
  const [locale, setLocale] = useState<LocaleCode>(() => getStoredLocale());
  const [data, setData] = useState<PortfolioData>(() => localeModules[getStoredLocale()] as PortfolioData);

  const handleLocaleChange = (nextLocale: LocaleCode) => {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    setLocale(nextLocale);
    setData(localeModules[nextLocale] as PortfolioData);
  };

  const currentSite = useMemo(
    () => ({
      title: data.meta?.title ?? site.title,
      description: data.meta?.description ?? site.description,
      name: data.navigation?.name ?? site.name,
      locale: data.meta?.locale ?? site.locale,
      url: site.url,
    }),
    [data],
  );

  return (
    <>
      <Head>
        <title>{currentSite.title}</title>
        <meta content={currentSite.description} name="description" />
        <link href={`${currentSite.url}/`} rel="canonical" />
        <link href="./favicon.svg" rel="icon" type="image/svg+xml" />
        <meta content={currentSite.title} property="og:title" />
        <meta content={currentSite.description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content={`${currentSite.url}/`} property="og:url" />
        <meta content={`${currentSite.url}/profile.jpg`} property="og:image" />
        <meta content={currentSite.name} property="og:site_name" />
        <meta content={currentSite.locale} property="og:locale" />
        <meta content="summary" name="twitter:card" />
        <meta content={currentSite.title} name="twitter:title" />
        <meta content={currentSite.description} name="twitter:description" />
        <meta content={`${currentSite.url}/profile.jpg`} name="twitter:image" />
      </Head>

      <LocaleSwitcher
        locale={locale}
        modeToggle={<ModeToggle />}
        onLocaleChange={handleLocaleChange}
      />

      <Box
        id="main-content"
        component="main"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '100vh',
          px: { xs: 3, md: 6 },
          py: 6,
          gap: 6,
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            flex: '0 0 auto',
            width: { xs: '100%', md: '50%' },
            display: 'flex',
          }}
        >
          <Navigation data={data.navigation} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <About data={data.about} />
          <Experience heading={data.experience.heading} experience={data.experience.items} />
          {data.certificates && (
            <Certificates
              certificates={data.certificates.items}
              completedLabel={data.certificates.completedLabel}
              heading={data.certificates.heading}
              verifiedLabel={data.certificates.verifiedLabel}
            />
          )}
          <Projects heading={data.projects.heading} projects={data.projects.items} />
          {/*
            <Box component="section" id="contact" sx={{ mb: 8 }}>
              <Typography id="contact-heading" level="h2" sx={{ mb: 1 }}>
                {data.contact.heading}
              </Typography>
              <Typography level="body-lg" sx={{ mb: 2 }}>
                {data.contact.description}
              </Typography>
              <Typography component="a" href={`mailto:${data.contact.email}`} level="body-md" sx={{ color: 'primary.plainColor' }}>
                {data.contact.cta}
              </Typography>
            </Box>
          */}
        </Box>
      </Box>

      <ScrollToTopButton />
    </>
  );
}
