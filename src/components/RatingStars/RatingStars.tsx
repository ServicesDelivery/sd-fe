import React from 'react';
import { Star, StarBorder, StarHalfOutlined } from '@mui/icons-material';
import {Style} from "util";

type RatingStarsProps = {
    rating: number,
    maxStars?: number,
    style?: React.CSSProperties,
}

function RatingStars({ rating, maxStars=5, style }: RatingStarsProps) {
    const defaultStyle: React.CSSProperties = { color: '#fcde03', fontSize: '20px'};

   const fullStars = Math.floor(rating);
   const emptyStars = maxStars - Math.ceil(rating);
   const hasHalfStar = fullStars + emptyStars !== maxStars;
    // const rating
    return (
        <div>
            {[...Array(fullStars)].map((i, n)=> (
                <Star style={style || defaultStyle} key={n}/>
            ))}
            {hasHalfStar && (
                <StarHalfOutlined style={style || defaultStyle}/>
            )}
            {[...Array(emptyStars)].map((i, n) => (
                <StarBorder style={style || defaultStyle} key={n}/>
            ))}
        </div>
    );
}

export default RatingStars;
