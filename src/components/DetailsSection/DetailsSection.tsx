import React from 'react';
import {Card, CardContent, Grid, Typography} from '@mui/material';

function DetailsSection() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            xs={false}
            sm={6}
            sx={{ backgroundColor: 'primary' }}
        >
            <Card
                sx={{ minWidth: 275, width: 'calc(100% - 20px)', height: 'calc(100vh - 20px)' }}
            >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Details section
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default DetailsSection;
