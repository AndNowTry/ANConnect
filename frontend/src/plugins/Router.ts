import React from 'react';
import Home from "../pages/Home.tsx"
import { createBrowserRouter } from "react-router"
import Room from "../pages/Room.tsx"



const routes = [
    {
        path: '/',
        element: React.createElement(Home),
    },
    {
        path: 'room/',
        element: React.createElement(Room),
    },
]



const router = createBrowserRouter(routes)
export default router