import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        }
    ])

  return <RouterProvider router={router} />
}

export default AppRoutes