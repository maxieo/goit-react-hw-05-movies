import axios from "axios";

const API_KEY = '8b24d8a82e8cb21a2008ced4781976cc'
export async function trendingToday() { 
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  const response = await axios.get(url)
  const data = await response.data
  const filmList = await data.results

  return filmList
}

export async function searchMovies(searchQuery) { 
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  const response = await axios.get(url)
  const data = await response.data
  const filmList = await data.results

  return { filmList, data }
}

export async function movieDetails(movieId) { 
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  const response = await axios.get(url)
  const data = await response.data

  return data
}

export async function movieCast(movieId) { 
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  const response = await axios.get(url)
  const data = await response.data
  const cast = await data.cast

  return cast
} 

export async function movieReviews(movieId) { 
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  const response = await axios.get(url)
  const data = await response.data
  const filmList = await data.results
  
  return filmList
} 