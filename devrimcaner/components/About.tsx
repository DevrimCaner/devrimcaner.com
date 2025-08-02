import { Box, Typography } from '@mui/joy';

type Props = {
  content: string;
};

const About = ({ content }: Props) => (
  <Box id="about" sx={{ mb: 8 }}>
    <Typography level="h2" sx={{ mb: 1 }}>
      About
    </Typography>
    <Typography level="body-lg" sx={{ whiteSpace: 'pre-line' }}>
      {content}
    </Typography>
  </Box>
);

export default About;
