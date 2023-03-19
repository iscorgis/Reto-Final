import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../Movie/Movie.jsx';
import { useParams } from "react-router-dom";

const Movies = props =>{

    const params = useParams();
    const movieType = params.movieType;
    const [movies, setMovies] = useState([]);

    let Endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=f67d06ba539aeaff61cdab68c9a33c82&language=es-ES&page=1&total_results=1`
    
    useEffect(()=>{
        if (movieType === "TopTen"){
             Endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=f67d06ba539aeaff61cdab68c9a33c82&language=es-ES&page=1&total_results=10`
        }
        if (movieType === "searchByTitle"){
            Endpoint = `https://api.themoviedb.org/3/search/movie?api_key=f67d06ba539aeaff61cdab68c9a33c82&query=${document.getElementById('searchTxt').value}`
        } 
        if (movieType === "searchByOverview"){
            Endpoint = `https://api.themoviedb.org/3/search/movie?api_key=f67d06ba539aeaff61cdab68c9a33c82&query=${document.getElementById('searchTxt').value}`
        }
        if (movieType === "searchByOriTitle"){
            Endpoint = `https://api.themoviedb.org/3/search/movie?api_key=f67d06ba539aeaff61cdab68c9a33c82&query=${document.getElementById('searchTxt').value}`
        }
        console.log("endpoint", Endpoint)
        axios.get(Endpoint) 
        .then(res => setMovies(res.data.results))
        // .cath(console.error)
    },[movieType]);
// }  
    
    
    let filtered_movies = movies

    console.log('movieType',movieType)

    if (movieType == "topTen"){
        console.log('movieType1',movieType)
        filtered_movies = movies.slice(0, 1);
    }
    const [stats, setStats] = useState([]);
    const [ID,setID] = useState('');
    
    const changeId = (event) =>{
        console.log('event',event)
     setID(event);
    }

    return <div className="movies">
        <div>
        <form 
        // onSubmit={(event) => event.preventDefault()}
        >
      <input
        type='text' id="searchTxt"
            onChange={(event) => {changeId(event.target.value) }}
        placeholder='Search'
      />
    </form>



        </div>
        {filtered_movies.map(movie => <Movie movie={movie} /> )}
    </div>

}

export default Movies