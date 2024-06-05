import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Grid } from '@mui/material';

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
        height: 'auto',
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
        <Grid container>
            <Grid item xs={12}>
                <CardMedia sx={{ marginRight: '16px'}}>
                    <Box sx={{
                        backgroundColor: color,
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        justifyContent: 'center',
                        paddingTop:'8px'
                    }}>
                    {icon}
                    </Box>
                </CardMedia>
            </Grid>
            <Grid item xs={12}>
                <CardContent sx={{ padding: '0 !important' }}>
                    <Typography variant="h6" component="div" >
                    {title}
                    </Typography>
                    <Typography variant="body2" style={{opacity:0.6}}>
                    {description}
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
    </Card>
  );
};

export default SocialCard;
