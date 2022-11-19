import { useState, useEffect } from "react"
import { trendingToday } from "components/api"
import { FilmItem } from "components/FilmItem/filmItem"
import { HomeList } from "./home.styled"

const Home = () => { 
  const [films, setFilms] = useState([])
  
  useEffect(() => { 
    trendingToday().then(setFilms);
  }, []) 


return (
  <HomeList>
    {films.map(film => { 
      const { id, poster_path, title, name } = film
      return (
        <FilmItem key={id} posterPath={poster_path} title={title ?? name} movieId={id} />
      )
    })}
  </HomeList>
  )
}

export default Home
