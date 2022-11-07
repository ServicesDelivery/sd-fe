import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import { Category } from '../../types';

const sizesMap = {
    s: {
        image: '100px',
        gridSizes: {
            xs: 6,
            sm: 12,
            md: 6,
            lg: 4,
        },
        textHeight: '40px',
    },
    m: {
        image: '180px',
        gridSizes: {
            xs: 6,
            sm: 4,
            md: 3,
            lg: 3,
        },
        textHeight: '30px',
    },
    l: {
        image: '250px',
        gridSizes: {
            xs: 6,
            sm: 4,
            md: 3,
            lg: 3,
        },
        textHeight: '30px',
    }
}

type SearchResultProps = {
    item: Category,
    onClick?: () => void,
    isActive?: boolean,
    size?: 's' | 'm' | 'l'
}

function SearchResult({ item, onClick, isActive = false, size = 'm' }: SearchResultProps) {
    const {image, gridSizes, textHeight } = sizesMap[size];
    const theme = useTheme();

    return (
        <Grid item {...gridSizes}>
            <Card
                onClick={onClick}
                style={{outline: isActive ? `2px solid ${theme.palette.primary.light}` : '' }}
            >
                <CardActionArea>
                    { item.img && <CardMedia
                        component="img"
                        height={image}
                        image={item.img}
                        alt={item.name}
                    />}
                    <CardContent>
                        <Typography
                            height={textHeight}
                            gutterBottom
                            variant="body2"
                            component="div"
                            textAlign="center"
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            {item.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}

export default SearchResult;
