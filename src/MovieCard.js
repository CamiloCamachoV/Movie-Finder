import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
    const movie = props.movie;

    return (

        <div className="card" key={movie.id}>
            <img className="card-img"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
            <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-text">{movie.overview}</p>
                <p className="card-text"><small className="text-muted">RELEASE DATE: {movie.release_date}</small></p>
                <p className="card-text"><small className="text-muted">RATING: {movie.vote_average}</small></p>
                       
            </div>

        </div>
    )
}

export default MovieCard
