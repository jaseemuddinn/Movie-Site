import React from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
import { useState } from "react";


// afa494a7


const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=afa494a7";

// const movie1 =
// {
//     "Title": "Iron Man 3",
//     "Year": "2013",
//     "imdbID": "tt1300854",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
// }


const App = () => {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("Superman")
    }, [])
    return (
        <div className="app">
            <h1>Movietnm</h1>
            <div className="search">
                
                <input
                    placeholder="Search your movie"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    
                />
                <img src={SearchIcon}
                    alt="Search"
                    onClick={() => {
                        searchMovies(search)
                    }}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie)=>(
                                <MovieCard movie={movie} />
                            ))} 
                            
                        </div>
                    )
                    : (
                        <div className="empty">
                            <h2>Movie not found</h2>
                        </div>
                    )
            }

        </div>
    )
};

export default App;
