import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { 
    createBrowserRouter, 
    RouterProvider 
} from "react-router-dom";

import { 
    Home, 
    Lokasi, 
    Artikel, 
    Cuaca, 
    Bencana, 
    Contact, 
    NotFound 
} from './page';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "/lokasi",
        element: <Lokasi />,
        errorElement: <NotFound />,
    },
    {
        path: "/artikel",
        element: <Artikel />,
        errorElement: <NotFound />,
    },
    {
        path: "/cuaca",
        element: <Cuaca />,
        errorElement: <NotFound />,
    },
    {
        path: "/bencana",
        element: <Bencana />,
    },
    {
        path: "/contact",
        element: <Contact />,
        errorElement: <NotFound />,
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
