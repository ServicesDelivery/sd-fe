import React, { ReactNode, useState } from 'react';
import { Grid, Container } from '@mui/material';
import SearchField from "./SearchField";
import SearchResult from "./SearchResult";
import { Category } from "../../types";

type SearchFiltersSectionProps = {
    items: Category[],
    beforeSearchNode?: ReactNode,
    size?: 's' | 'm' | 'l'
}

function SearchFiltersSection({ items, size = 'm', beforeSearchNode }: SearchFiltersSectionProps) {
    const [selectedCards, setSelectedCards] = useState<string[]>([]);

    const onSearchCardClick = (id: string) => {
        if (selectedCards.includes(id)) {
            setSelectedCards(selectedCards.filter(i => i !== id));
        } else {
            setSelectedCards([...selectedCards, id]);
        }
    };

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
                                isActive={selectedCards.includes(category.id)}
                                onClick={() => onSearchCardClick(category.id)}
                            />
                        ))
                    }
                </Grid>
            </Container>
        </Grid>
    );
}

export default SearchFiltersSection;
