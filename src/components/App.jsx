import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/layout';
import { Home } from './Pages/Home/home.jsx';
import { Movies } from './Pages/Movies/movies';
import { MovieDetails } from './Pages/Movies/MoviesDetails/movieDetails';
import { Cast } from './Pages/Movies/Cast/cast';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
        </Route>
      </Route>
    </Routes>
  );
};