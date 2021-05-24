import React, {useState}  from 'react'
import MovieCard from './MovieCard';
require('dotenv').config();


function SearchMovies() {

//states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);
    const api_key = process.env.REACT_APP_TMDB_API_KEY;

    const searchMovies = async (e) => {
        e.preventDefault();
                
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                    ></input>
                <button className="btn btn-danger" type="submit">Search</button>
            </form>
            <br></br>
            <div className="row">
            
                
                    {movies.filter(movie => movie.poster_path).map(movie => (
                        <div className="col-sm-4" key={movie.id}>
                        <MovieCard movie={movie} key={movie.id}/>
                        </div>    
                        ))}
              
            </div>

        </div>
    )
}

export default SearchMovies
