import { Box, Typography } from '@mui/joy';
import type { AboutData } from '../lib/portfolio';

type Props = {
  data: AboutData;
};

const About = ({ data }: Props) => (
  <Box aria-labelledby="about-heading" component="section" id="about" sx={{ mb: 8 }}>
    <Typography id="about-heading" level="h2" sx={{ mb: 1 }}>
      {data.heading}
    </Typography>
    <Typography level="body-lg" sx={{ whiteSpace: 'pre-line' }}>
      {data.content}
    </Typography>
  </Box>
);

export default About;
