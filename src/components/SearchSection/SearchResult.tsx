import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import { Category } from '../../types';

const sizesMap = {
    s: {
        image: '100px',
        gridSizes: {
            xs: 6,
            sm: 6,
            md: 4,
        },
    },
    m: {
        image: '180px',
        gridSizes: {
            xs: 6,
            sm: 4,
            md: 3,
        },
    },
    l: {
        image: '250px',
        gridSizes: {
            xs: 6,
            sm: 4,
            md: 3,
        },
    }
}

type SearchResultProps = {
    item: Category,
    size?: 's' | 'm' | 'l'
}

function SearchResult({ item, size = 'm' }: SearchResultProps) {
    const {image, gridSizes } = sizesMap[size];

    return (
        <Grid item {...gridSizes}>
            <Link to={`/category/${item.id}`}>
                <Card>
                    <CardActionArea>
                        { item.img && <CardMedia
                            component="img"
                            height={image}
                            image={item.img}
                            alt={item.name}
                        />}
                        <CardContent>
                            <Typography gutterBottom variant="body2" component="div">
                                {item.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Grid>
    );
}

export default SearchResult;
