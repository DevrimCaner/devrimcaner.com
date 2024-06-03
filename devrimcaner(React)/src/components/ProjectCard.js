import React from 'react';
import { Typography, Card, CardContent, CardMedia, Chip, Box } from '@mui/material';

const ProjecsCard = (project) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: '33%' }}
                image={project.image}
                alt={project.title}
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {project.title}
                </Typography>
                <Box >
                    <Chip label={project.type} size="small" />
                </Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {project.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {project.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ProjecsCard;
