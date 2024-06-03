import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.background.paper }}>
            <Container maxWidth="md">
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="body1">
                            DevrimCaner
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" color="text.secondary">
                            {'© '}
                            {new Date().getFullYear()}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Footer;
