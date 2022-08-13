import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, updateSelectedMovieId, trailer }) => { 
    return (
        <section className="card-container">
            <section className="card">
                <section className="half top">
                     <section className='content' onMouseOver={() => updateSelectedMovieId(movie.id)}>
                        <img src={movie.backdrop_path} alt='movie backdrop'></img>
                        <p>{movie.title} {`(${movie.release_date.slice(0, 4)})`}</p>
                     </section>
                </section>
                <section className="half bottom">
                    <section className="content">
                        <iframe className='trailer' width="360" height="215" src={trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </section>
                </section>
            </section>
        </section>   
    );
};

export default MovieCard;