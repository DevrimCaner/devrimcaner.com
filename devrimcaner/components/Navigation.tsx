import { Box, Typography, Link, Stack, Divider } from '@mui/joy';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

type Social = {
  linkedin?: string;
  Github?: string;
};

type NavData = {
  name: string;
  title: string;
  bio: string;
  Social: Social;
};

type Props = {
  data: NavData;
};

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
      height: { md: 'calc(100vh - 120px)', xs: 'auto' }, // constrain to viewport on md+
    }}
  >
    {/* Top part: name/title/bio */}
    <Box>
      <Typography level="h3" sx={{ mb: 0.5 }}>
        {data.name}
      </Typography>
      <Typography level="body-sm" sx={{ mb: 1, color: 'text.secondary' }}>
        {data.title}
      </Typography>
      <Typography level="body-md">{data.bio}</Typography>
    </Box>

    {/* Navigation links */}
    <Box>
      <Stack spacing={1}>
        <Link href="#about" underline="none">
          About
        </Link>
        <Link href="#projects" underline="none">
          Projects
        </Link>
        <Link href="#experience" underline="none">
          Experience
        </Link>
      </Stack>
    </Box>

    <Box sx={{ mt: { md: 'auto', xs: 0 } }}>
      <Divider sx={{ mb: 1 }} />
      <Stack direction="row" spacing={1}>
        {data.Social.linkedin && (
          <Link href={data.Social.linkedin} target="_blank" aria-label="LinkedIn">
            <IconBrandLinkedin size={20} />
          </Link>
        )}
        {data.Social.Github && (
          <Link href={data.Social.Github} target="_blank" aria-label="GitHub">
            <IconBrandGithub size={20} />
          </Link>
        )}
      </Stack>
    </Box>
  </Box>
);

export default Navigation;
