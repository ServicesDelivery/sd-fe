import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

type SearchItem = {
    description: string,
    img: string,
    name: string,
    id: string,
    // averagePrice: string
    // averageDuration: string
}

type SearchResultProps = {
    item: SearchItem
}

function SearchResult({ item }: SearchResultProps) {
    return (
        <Link to={`/category/${item.id}`}>
            <Card>
                <CardActionArea>
                    { item.img && <CardMedia
                        component="img"
                        height="180"
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
    );
}

export default SearchResult;
