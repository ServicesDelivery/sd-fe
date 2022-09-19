import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const SearchResults = [
    {
        description: 'Apartment or houses cleaning ',
        img: 'https://i.postimg.cc/cJ8Q8qSJ/istockphoto-1147140997-612x612.jpg',
        name: 'House Cleaning',
        id: '1',
    },
    {
        description: 'Let us clean your clothes',
        img: 'https://i.postimg.cc/cHyfRDxB/happy-woman-laundry-room-washing-washing-machine-414360-1285.jpg',
        name: 'Laundry and dry-cleaning',
        id: '2',
    },
    {
        description: 'Fresh food delivery',
        img: 'https://i.postimg.cc/nzySQK5y/0c275e1ffc9166e2d6b98f1de30bd4cd.png',
        name: 'Food Delivery',
        id: '3',
    },
    {
        description: 'Healthy fresh meals every day',
        img: 'https://i.postimg.cc/x18GnJpM/istockphoto-1300513392-612x612.jpg',
        name: 'Cooking and rations delivery',
        id: '4',
    },
    {
        description: 'Make your garden beautiful again',
        img: 'https://i.postimg.cc/MKd0Cb5z/mulching-plants-abstract-concept-vector-illustration-soil-covering-plant-protection-weed-control-ret.jpg',
        name: 'Garden care',
        id: '5',
    },
    {
        description: 'Get best fresh flowers fast',
        img: 'https://i.postimg.cc/y8Gmd125/istockphoto-1295626893-612x612.jpg',
        name: 'Flowers delivery',
        id: '6',
    },
]

function SearchSection() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
            >
                <Container maxWidth="md">
                    <Container maxWidth="sm">
                        <Typography variant="h3" component="h2" color="primary">
                            {/*<img src={dropImg} alt="Service Delivery" height="70px"/>*/}
                            Service Delivery
                        </Typography>

                        <SearchField />
                    </Container>

                    <Grid container spacing={2} sx={{ padding: '20px' }}>
                        {
                            SearchResults.map(category => (
                                <Grid item xs={6} sm={4} md={3}>
                                    <SearchResult item={category}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </Grid>
        </ThemeProvider>
    );
}

export default SearchSection;
