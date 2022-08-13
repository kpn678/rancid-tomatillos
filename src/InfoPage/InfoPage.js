import React, { Component } from 'react';
import './InfoPage.css';
import { getSelectedMovie } from '../apiCalls';

class InfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: {},
      errorMessage: '',
      genres: []
    };
  };

  componentDidMount = () => {
    getSelectedMovie(this.props.selectedMovieId)
    .then(data => {
      let genres = data.movie.genres.join(' | ');
      this.setState({
        selectedMovie: data.movie,
        genres: genres
      }); 
    })
    .catch(error => {
      console.log(error);
      this.setState({errorMessage: error.message})
    })
  };

  render() {
    return (
      <>
        {this.state.errorMessage ? <h2 className='error-message'>{this.state.errorMessage}</h2> :
          <article className='movie-info-container' style={{backgroundImage: `url(${this.state.selectedMovie.backdrop_path})`}}>
            <section className='info-mask'>
              <section className="rotating-box">
                <section className="rotating-box-inner">
                  <section className="rotating-box-front">
                    <img className='rotating-image'  src={this.state.selectedMovie.poster_path} alt='movie backdrop'></img> 
                  </section>
                  <section className="rotating-box-back">
                    <section className='info-container'>
                      <section className='title-wrapper'>
                        <h2 className='title'>{this.state.selectedMovie.title}</h2>
                      </section>
                      <section className='tagline-wrapper'>
                        <h3 className='tagline'>{this.state.selectedMovie.tagline}</h3>
                      </section>
                      <section className='information-wrapper'>
                        <p className="information">
                          <b>RELEASE DATE</b>: {this.state.selectedMovie.release_date} <br></br><br></br>
                          {this.state.genres} <br></br><br></br>
                          {Math.round(this.state.selectedMovie.average_rating * 10) / 10}/10 ⭐️ <br></br><br></br>
                          <b>RUNTIME</b>: {this.state.selectedMovie.runtime} MINUTES
                        </p>
                      </section>
                      <section className='overview-wrapper'>
                        <h3 className='overview'>{this.state.selectedMovie.overview}</h3>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </article>
        }
      </>
    );
  };
};

export default InfoPage;