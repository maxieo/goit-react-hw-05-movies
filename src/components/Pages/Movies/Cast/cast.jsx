import { movieCast } from "components/api"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import errorIMG from '../../../images/errorIMG.png'
import { CastList, CastPhoto, CastItem } from "./cast.styled"

const Cast = () => { 
  const [actors, setActors] = useState([])
  const { movieId } = useParams()
  

  useEffect(() => { 
    if (!movieId) return

    movieCast(movieId).then(setActors)
  }, [movieId])

  return (
    <CastList>
      {actors.map(actor => { 
        const img = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

        return (
          <CastItem key={actor.id}>
            <CastPhoto src={actor.profile_path ? img : errorIMG} alt={actor.name} />
            <h2>{actor.name}</h2>
            <p>Character: {actor.character}</p>
          </CastItem>
        )
      })}
    </CastList>
  )
}

export default Cast
