import React from 'react'
import'./Moviecard.css'

const MovieCard = ({movie}) => {
return (
    <div className='card'>
        <div className='poster'>
            <img src={movie.poster_path?`https://image.tmdb.org/t/p/w500${movie.poster_path}`:'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60'}alt="" />
        </div>
        <div className='info'>
            <p className='title'>{movie.title}</p>
            <p className='vote'>{movie.vote_average}</p>
        </div>
        <div className='overview'>
        <h2 className='title_overview'>Overview</h2>
        <h3 className='overview_info'>{movie.overview}</h3>
        </div>
    </div>
)
}

export default MovieCard