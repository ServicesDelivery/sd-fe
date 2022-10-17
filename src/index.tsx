import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { getActiveTheme } from './assets/styles/themes';

import router from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = getActiveTheme();

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
