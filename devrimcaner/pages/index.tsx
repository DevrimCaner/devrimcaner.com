import Head from 'next/head';
import portfolioData from '../data/data.json';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import { Box } from '@mui/joy';
import type { PortfolioData } from '../lib/portfolio';
import { site } from '../lib/site';

const data: PortfolioData = portfolioData;

export default function Home() {
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta content={site.description} name="description" />
        <link href={`${site.url}/`} rel="canonical" />
        <link href="./favicon.svg" rel="icon" type="image/svg+xml" />
        <meta content={site.title} property="og:title" />
        <meta content={site.description} property="og:description" />
        <meta content="website" property="og:type" />
        <meta content={`${site.url}/`} property="og:url" />
        <meta content={`${site.url}/profile.jpg`} property="og:image" />
        <meta content={site.name} property="og:site_name" />
        <meta content={site.locale} property="og:locale" />
        <meta content="summary" name="twitter:card" />
        <meta content={site.title} name="twitter:title" />
        <meta content={site.description} name="twitter:description" />
        <meta content={`${site.url}/profile.jpg`} name="twitter:image" />
      </Head>
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
          <About content={data.about} />
          <Experience experience={data.experience} />
          <Projects projects={data.projects} />
        </Box>
      </Box>
    </>
  );
}
