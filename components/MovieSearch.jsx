import React from 'react';
import MovieList from './MovieList.jsx';

var trim = function() {
    const TRIM_RE = /^\s+|\s+$/g;
    return function trim(string) {
        return string.replace(TRIM_RE, '')
    }
}();


class MovieSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: props.movies
        };
    }

    handleSearch() {
        this.getSearchInput()
            .then(this.validateSearchInput.bind(this))
            .then(this.fetchMovies.bind(this))
            .then(this.displayMovies.bind(this))
            .catch(this.handleError.bind(this));
    }
    getSearchInput() {
        const value = this.refs.search.value;
        return new Promise(function(resolve, reject) {
            resolve(value);
        });
    }
    validateSearchInput(searchInputValue) {
        return new Promise(function (resolve, reject) {
            const query = trim(searchInputValue);
            if (!query) {
                reject(new Error('Search input is empty'));
            }

            resolve(searchInputValue);
        });
    }
    fetchMovies(query) {
        return window.fetch('https://api.themoviedb.org/3/search/movie?query='+query+'&api_key=e923bed1f7b3b892e828c8d972f749ee')
            .then(
                function(response) {
                    return response.json();
                },
                function(error) {
                    console.error(error);
                }
            );
    }
    displayMovies(list) {
        console.log(list);
        console.log('this.setState', list.results);
        this.setState({movies: list.results});
    }

    handleError(e) {
        this.state.error = e.message;
    }

     render() {
        return <div className="container theme-showcase" role="main">
            <div className="jumbotron">
                <p>Let's search for some movies!</p>
                <input type="text" placeholder="Movie title" ref="search" id="search"/>
                <p style="color:red">{this.state.error}</p>
                <button onClick={this.handleSearch.bind(this)}>Search</button>
            </div>
            <MovieList movies={this.state.movies} />
        </div>;
    }
}

export default MovieSearch;