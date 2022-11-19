import { useEffect } from "react"
import { useState } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import { movieDetails } from "components/api"
import { MovieCard } from "./movieCard"

export const MovieDetails = () => {
  const [film, setFilm] = useState({})
  const { movieId } = useParams()
  const location = useLocation

  useEffect(() => { 
    if (!movieId)
      return
    
    movieDetails(movieId).then(({ id, poster_path, original_title, release_date, genres, overview, vote_average }) =>
    { setFilm({id, poster_path, original_title, release_date, genres, overview, vote_average})})
  }, [movieId])


return (
  <section>
    <div>
      <button type="button" to={location.state?.from ?? '/'}>
        Go Back
      </button>
    </div>
    {film.id && (
      <MovieCard
        poster_path={film.poster_path}
        original_title={film.original_title ?? 'none'}
        release_date={film.release_date}
        genres={film.genres ?? [{ id: 1, name: 'none' }]}
        overview={film.overview ?? 'none'}
        vote_average={film.vote_average ?? 0}
      />
    )}
    <div>
      <button to="cast" state={{ from: location.state?.from ?? '/' }}>Cast</button>
      <button to="reviews" state={{ from: location.state?.from ?? '/' }}>Reviews</button> 
    </div>
    <Outlet/>
  </section>
  )
}
