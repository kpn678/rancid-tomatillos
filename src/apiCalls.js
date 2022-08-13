const getMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(response => {
            if (!response.ok) {
                throw new Error('Oops, something went wrong, please try again!');
            } else {
                return response.json();
            }
        })      
};

const getSelectedMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Oops, something went wrong, please try again!');
            } else {
                return response.json();
            }
        })      
};

const getSelectedTrailer = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Oops, something went wrong, please try again!');
            } else {
                return response.json();
            }
        })      
};

export { getMovies, getSelectedMovie, getSelectedTrailer  } 