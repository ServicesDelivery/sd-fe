import React from 'react';
import { Typography } from '@mui/material';
import CompanyCard from './CompanyCard';
import {Company} from "../../types";

type CompaniesListProps = {
    items: Company[]
}

function CompaniesList({ items }: CompaniesListProps) {
    return (
        <div
            style={{
                minWidth: 275,
                padding: '20px',
                borderRadius: '0',
                width: '100%',
                minHeight: '100vh',
                boxSizing: 'border-box',
            }}
        >
            <Typography variant="h5" component="h5" color="primary" sx={{margin: '10px auto 20px'}}>
                Recommended companies for cleaning service category:
            </Typography>
            {
                items.map(item => <CompanyCard item={item} key={item.id} />)
            }
        </div>
    );
}

export default CompaniesList;
