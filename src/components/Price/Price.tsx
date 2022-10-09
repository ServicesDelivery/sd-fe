import React from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { PriceRange } from '../../types';

type PriceProps = {
    value: PriceRange,
    style?: React.CSSProperties,
}

function Price({ value, style={} }: PriceProps) {
    const defaultStyle: React.CSSProperties = {
        color: 'white',
        fontSize: '20px',
        margin: '0 -5px',
    };

    return (
        <div style={{ margin: '5px', marginRight: '10px', whiteSpace: 'nowrap' }}>
            {[...Array(value + 1)].map((i, n)=> (
                <AttachMoneyIcon style={{...defaultStyle, ...style}} key={n}/>
            ))}
        </div>
    );
}

export default Price;
