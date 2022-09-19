import React from 'react';
import {Grid, Paper} from '@mui/material';
import SearchSection from './components/SearchSection/SearchSection'
import './assets/main.css'

function App() {
    return (
        <div className="App">
            <Paper
                sx={{
                    backgroundColor: '#1A2027',
                    minHeight: '100vh',
                    padding: '20px',
                }}
            >
                <Grid container component="main" sx={{ minHeight: '100vh' }}>
                    <SearchSection/>
                </Grid>
            </Paper>
        </div>
    );
}

export default App;
