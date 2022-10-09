import React from 'react';
import {Grid, Paper, Typography} from '@mui/material';
import CompaniesList from '../Company/CompaniesList';
import { Company, Category, PriceRange } from '../../types';
import SearchSection from "../SearchSection/SearchSection";

const SearchResults: Category[] = [
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
];

const companiesList: Company[] = [
    {
        id: '111',
        name: 'Cleaning well',
        logo: 'https://i.ibb.co/mqTL3JK/38415219.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid architecto asperiores atque blanditiis culpa deleniti dicta eligendi, explicabo facere fuga fugiat impedit incidunt natus quae quidem sed sunt voluptate?',
        price: PriceRange.normal,
        rating: 4,
        categories: [
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
                description: 'Make your garden beautiful again',
                img: 'https://i.postimg.cc/MKd0Cb5z/mulching-plants-abstract-concept-vector-illustration-soil-covering-plant-protection-weed-control-ret.jpg',
                name: 'Garden care',
                id: '5',
            },
        ],
    },
    {
        id: '112',
        name: 'Cleaning well',
        logo: 'https://i.ibb.co/mqTL3JK/38415219.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid architecto asperiores atque blanditiis culpa deleniti dicta eligendi, explicabo facere fuga fugiat impedit incidunt natus quae quidem sed sunt voluptate?',
        price: PriceRange.low,
        rating: 3.5,
        categories: [
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
        ],
    },
    {
        id: '113',
        name: 'Cleaning well',
        logo: 'https://i.ibb.co/mqTL3JK/38415219.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid architecto asperiores atque blanditiis culpa deleniti dicta eligendi, explicabo facere fuga fugiat impedit incidunt natus quae quidem sed sunt voluptate?',
        price: PriceRange.high,
        rating: 4.5,
        categories: [
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
        ],
    },
];

function CategoryPage() {
    const CategoryNameNode =( <div>
        <Typography variant="h5" component="h3" color="primary">
            Category Name
        </Typography>
        <Typography variant="body2" color="primary">description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dignissimos eius eos error facere iure maxime optio provident repellendus saepe? Ad consequuntur dignissimos dolores ipsam nemo! Eveniet incidunt repudiandae voluptas.</Typography>
    </div>)

    return (
        <div>
            <Paper
                sx={{
                    backgroundColor: '#1A2027',
                    boxSizing: 'border-box',
                    minHeight: '100vh',
                    borderRadius: '0',
                }}
            >
                <Grid
                    container
                    component="main"
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid container item xs={12} sm={4} sx={{ padding: '20px' }}>
                        <SearchSection items={SearchResults} beforeSearchNode={CategoryNameNode} size="s"/>
                    </Grid>
                    <Grid
                        container
                        item
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        xs={false}
                        sm={8}
                    >
                        <CompaniesList items={companiesList} />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default CategoryPage;
