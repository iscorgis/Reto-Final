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
    
    // const filtered_movies = movies

    console.log('movieType',movieType)

    const filtered_movies = movies.slice(0, 10);

    // if (movieType === 'topTen') {
    //     filtered_movies = movies.slice(0, 10);
    // }



    const [stats, setStats] = useState([]);
    const [ID,setID] = useState('');
    
    const changeId = (event) =>{
        console.log('event',event)
     setID(event);
    }

    return <div className="movies">
        <div>
        <form onSubmit={(event) => event.preventDefault()}>
      <input
        type='text'
        onChange={(event) => {changeId(event.target.value) }}
        placeholder='Search'
      />
    </form>



        </div>
        {filtered_movies.map(movie => <Movie movie={movie} /> )}
    </div>

}

export default Movies