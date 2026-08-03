import { Box, Typography, Card, Chip, Stack } from '@mui/joy';
import { IconClock } from '@tabler/icons-react';
import ExternalLink from './ExternalLink';
import type { Project } from '../lib/portfolio';

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => (
  <Box aria-labelledby="projects-heading" component="section" id="projects" sx={{ mb: 8 }}>
    <Typography id="projects-heading" level="h2" sx={{ mb: 2 }}>
      Projects
    </Typography>
    <Stack spacing={3}>
      {projects.map((project) => (
        <Card key={project.id} variant="outlined" sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
            {project.url ? (
              <ExternalLink
                aria-label={`Open ${project.name}`}
                href={project.url}
                sx={{ display: 'inline-flex', alignItems: 'center' }}
                underline="none"
              >
                <Typography level="title-lg" sx={{ mr: 1 }}>
                  {project.name}
                </Typography>
              </ExternalLink>
            ) : (
              <Typography level="title-lg" sx={{ mr: 1 }}>
                {project.name}
              </Typography>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <IconClock aria-hidden="true" size={16} />
              <Typography level="body-xs">{project.period.display}</Typography>
            </Box>
          </Box>

          <Typography level="body-sm" sx={{ mt: 1 }}>
            {project.description}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
            {project.techs.map((t) => (
              <Chip key={t} size="sm" variant="soft" sx={{padding:'5px 10px', marginTop:'4px'}}>
                {t}
              </Chip>
            ))}
          </Stack>
          
        </Card>
      ))}
    </Stack>
  </Box>
);

export default Projects;
