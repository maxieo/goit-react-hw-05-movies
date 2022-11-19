import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { movieReviews } from "components/api"

const Reviews = () => { 
  const [reviews, setReviews] = useState([])
  const { movieId } = useParams()
  

  useEffect(() => {
    if (!movieId)
      return
      movieReviews(movieId).then(setReviews)
  }, [movieId])

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            )
          })}
        </ul>
      ) : (<p>We don't have any reviews for this movie</p>)}
    </div>
  );
}

export default Reviews