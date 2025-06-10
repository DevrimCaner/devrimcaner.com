import { Box, Typography } from '@mui/joy';

type Props = {
  name: string;
  bio: string;
};

const About = ({ name, bio }: Props) => (
  <Box sx={{ mb: 6 }}>
    <Typography level="h2">{name}</Typography>
    <Typography level="body-lg" sx={{ mt: 1 }}>{bio}</Typography>
  </Box>
);

export default About;
