import { Box, Typography, Card, Chip, Stack } from '@mui/joy';
import { IconClock } from '@tabler/icons-react';
import Description from './Description';
import ExternalLink from './ExternalLink';
import type { Experience as ExperienceItem } from '../lib/portfolio';

type Props = { heading: string; experience: ExperienceItem[] };

const Experience = ({ heading, experience }: Props) => (
  <Box aria-labelledby="experience-heading" component="section" id="experience" sx={{ mb: 8 }}>
    <Typography id="experience-heading" level="h2" sx={{ mb: 2 }}>
      {heading}
    </Typography>
    <Stack spacing={3}>
      {experience.map((job) => (
        <Card key={job.id} variant="outlined" sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            <Box>
              {job.url ? (
                <ExternalLink
                  href={job.url}
                  underline="none"
                  aria-label={`${job.role} at ${job.company}`}
                  sx={{ display: 'inline-flex', alignItems: 'baseline' }}
                >
                  <Typography level="title-md" sx={{ mr: 1 }}>
                    {job.role} @ {job.company}
                  </Typography>
                </ExternalLink>
              ) : (
                <Typography level="title-md" sx={{ mr: 1 }}>
                  {job.role} @ {job.company}
                </Typography>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                <IconClock aria-hidden="true" size={16} />
                <Typography level="body-xs">{job.period}</Typography>
              </Box>
            </Box>
          </Box>

          <Description description={job.description} />

          {job.techs.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
              {job.techs.map((t) => (
                <Chip key={t} size="sm" variant="soft" sx={{ padding: '5px 10px', marginTop:'4px' }}>
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
