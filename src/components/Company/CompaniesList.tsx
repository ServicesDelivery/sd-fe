import React from 'react';
import { Paper, Typography, ThemeProvider } from '@mui/material';
import CompanyCard from './CompanyCard';
import {Company} from "../../types";
import { darkTheme } from "../../assets/styles/themes";

type CompaniesListProps = {
    items: Company[]
}

function CompaniesList({ items }: CompaniesListProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <Paper
                sx={{
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
            </Paper>
        </ThemeProvider>
    );
}

export default CompaniesList;
