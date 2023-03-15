import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie.jsx';
import { useParams } from "react-router-dom";

const Movies = props =>{
    const params = useParams();
    const movieType = params.movieType;
    const [movies, setMovies] = useState([]);

    // Endpoints:
    // - top https://api.themoviedb.org/3/movie/popular?api_key=f67d06ba539aeaff61cdab68c9a33c82&language=es-ES&page=1


    // useEffect(()=>{
    //     axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=f67d06ba539aeaff61cdab68c9a33c82&language=es-ES`) 
    //      .then(res => setMovies(res.data.results))
    //     //  .cath(console.error)
    // },[movieType]);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f67d06ba539aeaff61cdab68c9a33c82&language=es-ES&page=1&total_results=1`) 
        .then(res => setMovies(res.data.results))
        // .cath(console.error)
    },[movieType]);

    return <div className="movies">
        {movies.map(movie => <Movie movie={movie} /> )}   
    </div>

}

export default Movies