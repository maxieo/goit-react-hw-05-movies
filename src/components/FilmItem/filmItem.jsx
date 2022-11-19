import React from "react";
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";
import errorIMG from "../images/errorIMG.png"
import { StyledList, Link, PosterFilm } from "./filmItem.styled";

export const FilmItem = ({posterPath, title, movieId}) => { 
  const location = useLocation()
  const filmPoster = `https://image.tmdb.org/t/p/w500/${posterPath}`

  return (
    <StyledList>
      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        <PosterFilm src={posterPath ? filmPoster : errorIMG} alt={title} />
      </Link>
      <h2>{title}</h2>
    </StyledList>
  )
}

FilmItem.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired
}