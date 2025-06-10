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
  <Box sx={{ mb: 6 }}>
    <Typography level="h2">Experience</Typography>
    {experience.map((job) => (
      <Card key={job.company} sx={{ mt: 2 }}>
        <Typography level="title-md">
          {job.role} @ {job.company}
        </Typography>
        <Typography level="body-xs" sx={{ mb: 1 }}>{job.period}</Typography>
        <Typography level="body-sm">{job.description}</Typography>
      </Card>
    ))}
  </Box>
);

export default Experience;
