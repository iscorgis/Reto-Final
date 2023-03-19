import React,{useState,useEffect} from 'react';
import './App.css';
import MovieBox from '../src/Components/Movie/MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=f67d06ba539aeaff61cdab68c9a33c82";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=f67d06ba539aeaff61cdab68c9a33c82&query";
function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  const searchMovie = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);

    //filter results by search type
    var e = document.getElementById("searchId");
    if (e != null){
    var value = e.value;
    var filtered = data.results;
    if (e.value == 1) {
      filtered = data.results.filter(a => a.title.search({query}) !== -1);
    };
    if (e.value == 2) {
      filtered = data.results.filter(a => a.original_title.search({query}) !== -1);
    };
    if (e.value == 3) {
      filtered = data.results.filter(a => a.overview.search({query}) !== -1);
    };
     
  //  var text = e.options[e.selectedIndex].text;
  // console.log("tex",text)
  // console.log("vaue",e.value)
}
  setMovies(filtered);
    // setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const searchTopTenMovies = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/movie/popular?api_key=f67d06ba539aeaff61cdab68c9a33c82&language=es-ES&page=1&total_results=10`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      // data.results.slice(0, 10);
      setMovies( data.results.slice(0, 10));
    }
    catch(e){
      console.log(e);
    }
  }

  const searchTopSeasons = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/tv/popular?api_key=f67d06ba539aeaff61cdab68c9a33c82&language=en-US&page=1`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies( data.results.slice(0, 10));
    }
    catch(e){
      console.log(e);
    }
  }

  const seasons = async(e)=>{
    e.preventDefault();
    console.log("Searching");
    try{
      const url=`https://api.themoviedb.org/3/tv/popular?api_key=f67d06ba539aeaff61cdab68c9a33c82&language=en-US&page=1`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies( data.results);
    }
    catch(e){
      console.log(e);
    }
  }

// ----
  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }
  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand className='Main_Brand' href="/home">Movies & Seasons APP</Navbar.Brand>
        <Navbar.Brand className='Snd_Brand' href="/home">Trending</Navbar.Brand>
        <Navbar.Brand className='Snd_Brand' href="/topTen" onClick={searchTopTenMovies}>Top Ten Movies</Navbar.Brand>
        <Navbar.Brand className='Snd_Brand' href="/seasons" onClick={seasons} >Seasons</Navbar.Brand> 
        <Navbar.Brand className='Snd_Brand' href="/seasons" onClick={searchTopSeasons} >Top ten Seasons</Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
                <select className="form-select" aria-label="Search Type Selector" id="searchId" >
                  <option value="1">By Tittle</option>
                  <option value="2">By Original Tittle</option>
                  <option value="3">By Overview</option>
                </select>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      {movies.length > 0 ?(
        <div className="container">
        <div className="grid">
          {movies.map((movieReq)=>
          <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
    </div>
      ):(
        <h2>Sorry !! No Movies Found</h2>
      )}
    </div>   
    </>
   
  );
}

export default App;
