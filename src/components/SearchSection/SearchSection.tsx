import React, { ReactNode } from 'react';
import { Grid, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";
import { Category } from "../../types";
import { darkTheme } from "../../assets/styles/themes";

type SearchSectionProps = {
    items: Category[],
    beforeSearchNode?: ReactNode,
    size?: 's' | 'm' | 'l'
}

function SearchSection({ items, size = 'm', beforeSearchNode }: SearchSectionProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
            >
                <Container maxWidth="md">
                    <Container maxWidth="sm">
                        { beforeSearchNode }
                        <SearchField />
                    </Container>

                    <Grid container spacing={2} sx={{ padding: '20px' }}>
                        {
                            items.map(category => (
                                <SearchResult size={size} item={category} key={category.id}/>
                            ))
                        }
                    </Grid>
                </Container>
            </Grid>
        </ThemeProvider>
    );
}

export default SearchSection;
