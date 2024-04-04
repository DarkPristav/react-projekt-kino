import "./MovieItem.css"

import React from 'react'

const MovieItem = ({movieImage, movieTitle, movieAge, movieTags, movieDesc}) => {
  return (
    <div className="item">
        <img src={movieImage} alt="{movieTitle}" />
        <h2>{movieTitle}</h2>
        <p>Věk: {movieAge}</p>
        <p>Tagy: {movieTags}</p>
        <p>Popis: {movieDesc}</p>
    </div>
  )
}

export default MovieItem