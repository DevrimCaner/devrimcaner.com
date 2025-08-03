import { Box, Typography, Card, Link } from '@mui/joy';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  link?: string;
};

type Props = {
  experience: ExperienceItem[];
};

const Experience = ({ experience }: Props) => (
  <Box id="experience" sx={{ mb: 8 }}>
    <Typography level="h2" sx={{ mb: 2 }}>
      Experience
    </Typography>
    {experience.map((job) => (
      <Card key={job.company} variant="outlined" sx={{ mt: 2, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
          <Box>
            {job.link ? (
              <Link
                href={job.link}
                target="_blank"
                underline="none"
                aria-label={`${job.role} at ${job.company}`}
              >
                <Typography level="title-md">
                  {job.role} @ {job.company}
                </Typography>
              </Link>
            ) : (
              <Typography level="title-md">
                {job.role} @ {job.company}
              </Typography>
            )}
            <Typography level="body-xs" sx={{ mt: 0.5 }}>
              {job.period}
            </Typography>
          </Box>
        </Box>
        <Typography level="body-sm" sx={{ mt: 1 }}>
          {job.description}
        </Typography>
      </Card>
    ))}
  </Box>
);

export default Experience;
