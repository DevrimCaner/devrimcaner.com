import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import { CssVarsProvider, Box, CssBaseline } from '@mui/joy';

import theme from '../theme/theme';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

type Data = {
  about: { name: string; bio: string };
  projects: { name: string; description: string; link: string }[];
  experience: { company: string; role: string; period: string; description: string }[];
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
      <Box sx={{ px: 4, py: 6, maxWidth: 800, mx: 'auto' }}>
        <About name={data.about.name} bio={data.about.bio} />
        <Projects projects={data.projects} />
        <Experience experience={data.experience} />
      </Box>
    </CssVarsProvider>
  );
}
