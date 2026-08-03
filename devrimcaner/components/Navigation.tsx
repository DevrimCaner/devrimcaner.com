import { Box, Typography, Link, Stack } from '@mui/joy';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import ExternalLink from './ExternalLink';
import type { NavigationData } from '../lib/portfolio';

type Props = { data: NavigationData };

const Navigation = ({ data }: Props) => (
  <Box
    component="aside"
    aria-label="Sidebar navigation"
    sx={{
      position: 'sticky',
      top: 80,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      minWidth: 220,
      pr: 4,
      height: { md: 'calc(100vh - 120px)', xs: 'auto' },
    }}
  >
    <Box>
      <Box
        sx={{
          width: { xs: 160, md: 200 },
          aspectRatio: '1',
          mb: 2,
          overflow: 'hidden',
          border: '2px solid',
          borderRadius: '50%',
          borderColor: 'primary.solidBg',
          boxShadow: '0 0 20px rgba(0,255,147,0.5)',
        }}
      >
        <Box
          alt={`${data.name} profile`}
          component="img"
          fetchPriority="high"
          height="200"
          loading="eager"
          src="./profile.jpg"
          width="200"
          sx={{ display: 'block', height: '100%', objectFit: 'cover', width: '100%' }}
        />
      </Box>

    <Typography component="h1" level="h1" sx={{ mb: 0.5 }}>
      {data.name}
    </Typography>
    <Typography level="body-sm" sx={{ mb: 1, color: 'text.secondary' }}>
      {data.title}
    </Typography>
    {data.bio && <Typography level="body-md">{data.bio}</Typography>}
    </Box>
    

    <Box aria-label="Profile sections" component="nav">
      <Stack spacing={1}>
        {['about', 'experience', 'projects'].map((id) => (
          <Link
            key={id}
            color="primary"
            href={`#${id}`}
            sx={{
              textTransform: 'capitalize',
              fontWeight: 600,
              '&:hover': { textDecoration: 'underline' },
              padding: '5px 0px',
            }}
            underline="none"
          >
            {id}
          </Link>
        ))}
      </Stack>
    </Box>


    <Box sx={{ mt: { md: 'auto', xs: 0 } }}>
      <Stack direction="row" spacing={1}>
        {data.social.linkedin && (
          <ExternalLink aria-label="Visit Devrim ÖKDEM on LinkedIn" href={data.social.linkedin}>
            <IconBrandLinkedin aria-hidden="true" size={30} />
          </ExternalLink>
        )}
        {data.social.github && (
          <ExternalLink aria-label="Visit Devrim ÖKDEM on GitHub" href={data.social.github}>
            <IconBrandGithub aria-hidden="true" size={30} />
          </ExternalLink>
        )}
      </Stack>
    </Box>
  </Box>
);

export default Navigation;
