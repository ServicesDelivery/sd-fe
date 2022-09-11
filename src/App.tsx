import React from 'react';
import {toRGB, VechaiProvider} from '@vechaiui/react';
import colors from 'tailwindcss/colors';
import './assets/main.css'

const detailsCardStyles = {
    background: `rgba(${toRGB(colors.amber["50"])}, 0.85)`,
    width: '50%',
    borderRadius: '25px',
    padding: '25px',
};

const searchSectionStyles = {
    width: '50%',
    padding: '25px',
};

const containerStyles = {
    background: colors.slate["800"],
    width: 'calc(100% - 50px)',
    minHeight: 'calc(100vh - 50px)',
    padding: '25px',
    display: 'flex',
};

function App() {
    return (
        <VechaiProvider>
            <div className="App">
                <div className="container" style={containerStyles}>
                    <div className="main-search" style={searchSectionStyles}>
                        <div className="search"> search </div>
                        <div className="results">
                            search results
                        </div>
                    </div>
                    <div className="details-card" style={detailsCardStyles}>
                        details
                    </div>
                </div>
            </div>
        </VechaiProvider>
    );
}

export default App;
