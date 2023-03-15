import React from "react";
import './Movie.scss'


const Movie = ({movie}) =>{
    return <div className="movie" key={movie.id}>
        <h4>{movie.title}</h4>
        <img src={"https://image.tmdb.org/t/p/w200"+movie.poster_path } alt=""   />
        <span>{movie.vote_average}</span>
    </div>
}

export default Movie;