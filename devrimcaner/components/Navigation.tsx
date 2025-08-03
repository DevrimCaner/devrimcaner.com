import Image from 'next/image';
import { Box, Typography, Link, Stack } from '@mui/joy';
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
    <Box sx={{ }}>
    <Box
      sx={{
        width: 200,
        height: 200,
        mb: 2,
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid',
        borderRadius: '50%',
        //borderColor: 'primary.solidBg',
        //boxShadow: '0 0 20px rgba(57,255,20,0.5)',
        //mx: 'auto',
      }}
    >
      <Image
        src="/profile.png"
        alt={`${data.name} profile`}
        fill
        sizes="120px"
        style={{ objectFit: 'cover' }}
        priority
      />
    </Box>

    <Typography level="h3" sx={{ mb: 0.5 }}>
      {data.name}
    </Typography>
    <Typography level="body-sm" sx={{ mb: 1, color: 'text.secondary' }}>
      {data.title}
    </Typography>
    <Typography level="body-md">{data.bio}</Typography>
  </Box>
    

    <Box>
        <Stack spacing={1}>
            {['about', 'projects', 'experience'].map((id) => (
                <Link
                    key={id}
                    href={`#${id}`}
                    underline="none"
                    color="primary"
                    sx={{
                    textTransform: 'capitalize',
                    fontWeight: 600,
                    '&:hover': { textDecoration: 'underline' },
                    }}
                >
                    {id}
                </Link>
            ))}
        </Stack>
    </Box>


    <Box sx={{ mt: { md: 'auto', xs: 0 } }}>
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
