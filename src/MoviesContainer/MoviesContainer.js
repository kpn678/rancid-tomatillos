import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ movieData, updateSelectedMovieId, trailer, selectedMovieId }) => {
    if (!trailer) {
        trailer = {key: ''};
    };
    const movieCards = movieData.map(movie => {
        let trailerUrl =`https://www.youtube.com/embed/`;
        movie.id === selectedMovieId ? trailerUrl += trailer.key + `?mute=1&autoplay=1` : trailerUrl = '';
        return (
            <Link to={`/${movie.id}`} style={{textDecoration: 'none'}} key={movie.id}>
                <MovieCard 
                    movie={movie}
                    updateSelectedMovieId={updateSelectedMovieId}
                    trailer={trailerUrl}
                />
            </Link>
        );
    });

    return (
        <section className= 'movies-container'>
            {movieCards}
        </section> 
    );
};

export default MoviesContainer;