import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LandingPage from '../pages/LandingPage'
import MoviesPage from '../pages/MoviesPage'
import MovieDetails from '../pages/MovieDetails'

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: '/movies',
            element: <MoviesPage />
        },
        {
            path: '/movieDetail',
            element: <MovieDetails />
        }
    ])
  return <RouterProvider router={router} />
}

export default AppRoutes