import { Box, Typography, Card, Link, Chip, Stack } from '@mui/joy';
import { IconClock } from '@tabler/icons-react';

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  link?: string;
  techs?: string[];
};

type Props = {
  experience: ExperienceItem[];
};

const Experience = ({ experience }: Props) => (
  <Box id="experience" sx={{ mb: 8 }}>
    <Typography level="h2" sx={{ mb: 2 }}>
      Experience
    </Typography>
    <Stack spacing={3}>
      {experience.map((job) => (
        <Card key={job.company} variant="outlined" sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            <Box>
              {job.link ? (
                <Link
                  href={job.link}
                  target="_blank"
                  underline="none"
                  aria-label={`${job.role} at ${job.company}`}
                  sx={{ display: 'inline-flex', alignItems: 'baseline' }}
                >
                  <Typography level="title-md" sx={{ mr: 1 }}>
                    {job.role} @ {job.company}
                  </Typography>
                </Link>
              ) : (
                <Typography level="title-md" sx={{ mr: 1 }}>
                  {job.role} @ {job.company}
                </Typography>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                <IconClock size={16} aria-label="period" />
                <Typography level="body-xs">{job.period}</Typography>
              </Box>
            </Box>
          </Box>

          <Typography level="body-sm" sx={{ mt: 1 }}>
            {job.description}
          </Typography>

          {job.techs && job.techs.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
              {job.techs.map((t) => (
                <Chip key={t} size="sm" variant="soft" sx={{ padding: '5px 10px' }}>
                  {t}
                </Chip>
              ))}
            </Stack>
          )}
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Experience;
