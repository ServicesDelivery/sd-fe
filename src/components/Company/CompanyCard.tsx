import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Card, CardMedia, Typography, Grid } from '@mui/material';
import { Company } from '../../types';
import RatingStars from '../RatingStars/RatingStars';
import Price from '../Price/Price';
import { useTheme } from '@mui/material/styles';

type CompanyCardProps = {
    item: Company
}

function CompanyCard({ item }: CompanyCardProps) {
    const theme = useTheme();

    const cardStyles = {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        color: theme.palette.text.primary,
        background: theme.palette.background.default,
        borderRadius: '20px',
    };

    return (
        <Grid item sx={{ marginBottom: '20px' }}>
            <Link to={`/category/${item.id}`} style={{textDecoration: 'none'}}>
                <Card style={cardStyles as React.CSSProperties}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'baseline',
                        }}
                    >
                        <RatingStars rating={item.rating} style={{fontSize: '18px'}}/>
                        <CardMedia
                            component="img"
                            sx={{ height: 50, width: 50, border: '1px solid #eee', borderRadius: '50%' }}
                            image={item.logo}
                            alt={item.name}
                        />

                    </div>
                    <Typography variant="h5" component="h5" color="primary">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" component="div">
                        {item.description}
                    </Typography>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '10px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Price value={item.price}/>
                            <Typography variant="body2" component="div" color="primary">
                                {item.categories.map(({ name }) => name).join(' • ')}
                            </Typography>
                        </div>
                        <ArrowRightAltIcon fontSize="large"/>
                    </div>
                </Card>
            </Link>
        </Grid>
    );
}

export default CompanyCard;
