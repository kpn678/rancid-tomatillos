import React, { Component } from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import InfoPage from '../InfoPage/InfoPage';
import { getMovies, getSelectedTrailer } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovieId: null,
      errorMessage: '',
      trailer: []
    };
  };

  componentDidMount = () => {
    getMovies()
    .then(data => {
      const filteredMovies = data.movies.filter(movie => movie.backdrop_path !== "https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg" && movie.backdrop_path !== '');
      this.setState({movies: filteredMovies})
    })
    .catch(error => {
      console.log(error);
      this.setState({errorMessage: error.message})
    })
  };

  updateSelectedMovieId = (id) => {
    getSelectedTrailer(id) 
    .then(data => {
      this.setState({
        trailer: data.videos[0],
        selectedMovieId: id
      })
    })
  };
  
  render() {
    return (
      <>
        <nav>
          <NavLink to={'/'} style={{ textDecoration: 'none' }}>
            <div className="text-container">
              <span>r</span>
              <span>a</span>
              <span>n</span>
              <span>c</span>
              <span>i</span>
              <span>d</span>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span>t</span>
              <span>o</span>
              <span>m</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>l</span>
              <span>l</span>
              <span>o</span>
              <span>s</span>
            </div>  
          </NavLink>
        </nav>
        <main>
          {this.state.movies.length === 0 && <h2 className='loading-message'>🍿Page Loading...🍿</h2>}
          {this.state.errorMessage && <h2 className='error-message'>{this.state.errorMessage}</h2>}
          <Switch>
            <Route
              exact path="/" render={() => <MoviesContainer movieData={this.state.movies} updateSelectedMovieId={this.updateSelectedMovieId} selectedMovieId={this.state.selectedMovieId} trailer={this.state.trailer} />}
            />
            <Route
              exact path='/:id' render={({ match }) => {
                return <InfoPage selectedMovieId={match.params.id} showError={this.showError} />
              }}
            /> 
            <Route 
              render={() => 
                <Redirect to={{pathname: "/"}} />
              } 
            />
          </Switch>
        </main>
      </>
    );
  };
};

export default App;
