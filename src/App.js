import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard  from "./MovieCard";


//45630161
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=45630161';
const movie1 = {
    "Title": "Spiderman the Verse",
    "Year": "2019–",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
  }
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchWord , setSearchWord] = useState([''])
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
searchMovies('spiderman');
    }, [])
    return (
        <div className="app">
            <h1>Princess Movie Land</h1>
            <div className="search">
                <input placeholder="Seach for Movie "
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
                />
                <img src={SearchIcon}
                alt="Search"
                onClick={()=> searchMovies(searchWord)} />

            </div>

{
    movies?.length > 0?
    (
        <div className="container">
              {
                movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))
              }
            </div>
    ): (
        <div className="empty">
            <h2>No movies</h2>
            </div>
    )
}

            
        </div>
    );
}
export default App;