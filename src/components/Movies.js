import React from 'react'
import { movies } from '../data'

function Movies() {
  const myMovies = movies.map((movie) => (
    <div key={movie.title}>
      <h2>Name :{movie.title}</h2>
      Time: {movie.time} minutes<br></br>
      Genres:
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {myMovies}
    </div>
  )
}

export default Movies
