import { Box, Typography, Card } from '@mui/joy';

type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

type Props = {
  experience: Experience[];
};

const Experience = ({ experience }: Props) => (
  <Box id="experience" sx={{ mb: 8 }}>
    <Typography level="h2" sx={{ mb: 2 }}>
      Experience
    </Typography>
    {experience.map((job) => (
      <Card key={job.company} variant="outlined" sx={{ mt: 2, p: 3 }}>
        <Typography level="title-md">
          {job.role} @ {job.company}
        </Typography>
        <Typography level="body-xs" sx={{ mb: 1 }}>
          {job.period}
        </Typography>
        <Typography level="body-sm">{job.description}</Typography>
      </Card>
    ))}
  </Box>
);

export default Experience;
