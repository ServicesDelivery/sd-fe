import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";
import { Category } from "../../types";

type SearchSectionProps = {
    items: Category[],
    beforeSearchNode?: ReactNode,
    size?: 's' | 'm' | 'l'
}

function SearchSection({ items, size = 'm', beforeSearchNode }: SearchSectionProps) {
    const navigate = useNavigate();
    const onSearchCardClick = (id: string) => navigate(`/category/${id}`);

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            item
            xs={12}
        >
            <Container maxWidth="md" sx={{ padding: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                    { beforeSearchNode }
                    <SearchField />
                </div>

                <Grid container spacing={2}>
                    {
                        items.map(category => (
                            <SearchResult
                                size={size}
                                item={category}
                                key={category.id}
                                onClick={() => onSearchCardClick(category.id)}
                            />
                        ))
                    }
                </Grid>
            </Container>
        </Grid>
    );
}

export default SearchSection;
