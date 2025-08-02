import { Box, Typography, Card, Link, Chip, Stack, Divider } from '@mui/joy';
import { IconClock } from '@tabler/icons-react';

type PeriodField =
  | string
  | {
      start?: string; // ISO-ish like "2022-12"
      end?: string;   // ISO-ish like "2023-02"
      display?: string; // fallback human string
    };

type Project = {
  name: string;
  description: string;
  link: string;
  period: PeriodField;
  techs: string[];
};

type Props = {
  projects: Project[];
};

const formatPeriod = (period: PeriodField): string => {
  if (!period) return '';
  if (typeof period === 'string') return period;
  if (period.display) return period.display;
  if (period.start && period.end) {
    return `${period.start} - ${period.end}`;
  }
  if (period.start) return period.start;
  if (period.end) return period.end;
  return '';
};

const Projects = ({ projects }: Props) => (
  <Box id="projects" sx={{ mb: 8 }}>
    <Typography level="h2" sx={{ mb: 2 }}>
      Projects
    </Typography>
    <Stack spacing={3}>
      {projects.map((project) => (
        <Card key={project.name} variant="outlined" sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
            <Typography level="title-lg">{project.name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <IconClock size={16} aria-label="period" />
              <Typography level="body-xs">{formatPeriod(project.period)}</Typography>
            </Box>
          </Box>

          <Typography level="body-sm" sx={{ mt: 1 }}>
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
            {project.techs.map((t) => (
              <Chip key={t} size="sm" variant="soft">
                {t}
              </Chip>
            ))}
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Link href={project.link} target="_blank" underline="none" aria-label={`View ${project.name}`}>
            View Project
          </Link>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Projects;
