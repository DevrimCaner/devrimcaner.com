import { Box, Typography } from '@mui/joy';

type Props = {
  content: string;
};

const About = ({ content }: Props) => (
  <Box aria-labelledby="about-heading" component="section" id="about" sx={{ mb: 8 }}>
    <Typography id="about-heading" level="h2" sx={{ mb: 1 }}>
      About
    </Typography>
    <Typography level="body-lg" sx={{ whiteSpace: 'pre-line' }}>
      {content}
    </Typography>
  </Box>
);

export default About;
