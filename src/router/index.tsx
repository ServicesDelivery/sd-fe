import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import CategoryPage from '../components/Category/CategoryPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/category/:id",
        element: <CategoryPage />,
    },
]);

export default router;