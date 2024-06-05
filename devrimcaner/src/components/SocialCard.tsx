import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from '@mui/material';

interface SocialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}

const SocialCard: React.FC<SocialCardProps> = ({ icon, title, description, link, color }) => {
  return (
    <Card
      sx={{
        transition:'all 0.2s',
        height: '100px',
        borderRadius: '16px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        color: color,
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        cursor: 'pointer',
        '&:hover': {
          borderColor: color,
        }
      }}
      onClick={() => window.open(link, '_blank')}
    >
      <CardMedia sx={{ marginRight: '16px' }}>
        <IconButton>
          {icon}
        </IconButton>
      </CardMedia>
      <CardContent sx={{ padding: '0 !important' }}>
        <Typography variant="h6" component="div" >
          {title}
        </Typography>
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SocialCard;
