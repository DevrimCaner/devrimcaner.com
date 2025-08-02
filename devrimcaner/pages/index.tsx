import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { CssVarsProvider, Box, CssBaseline } from '@mui/joy';

import theme from '../theme/theme';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

type Data = {
  navigation: {
    name: string;
    title: string;
    bio: string;
    Social: {
      linkedin?: string;
      Github?: string;
    };
  };
  about: string;
  projects: {
    name: string;
    description: string;
    link: string;
    period: string;
    techs: string[];
  }[];
  experience: {
    company: string;
    role: string;
    period: string;
    description: string;
  }[];
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data: Data = JSON.parse(jsonData);
  return { props: { data } };
};

export default function Home({ data }: { data: Data }) {
  return (
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <CssBaseline />
      
      <Box
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
          <Projects projects={data.projects} />
          <Experience experience={data.experience} />
        </Box>
      </Box>

    </CssVarsProvider>
  );
}
