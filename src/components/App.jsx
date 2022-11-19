import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/layout';

const Home = lazy(() => import('./Pages/Home/home'))
const Movies = lazy(() => import('./Pages/Movies/movies'))
const MovieDetails = lazy(() => import('./Pages/Movies/MoviesDetails/movieDetails'))
const Cast = lazy(() => import('./Pages/Movies/Cast/cast'))
const Reviews = lazy (() => import('./Pages/Movies/Reviews/reviews'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={ <Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

