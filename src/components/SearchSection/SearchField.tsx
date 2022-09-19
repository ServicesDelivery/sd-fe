import React from 'react';
import { TextField } from '@mui/material';

// type SearchOption = {
//     text: string,
//     url: string
// }
//
// type SearchFieldProps = {
//     options: SearchOption[]
// }

function SearchField() {
    return (
        <TextField
            id="standard-basic"
            label="What? When? Where? Search here"
            variant="standard"
            sx={{ margin: 'auto', width: '100%' }}
        />
    );
}

export default SearchField;
