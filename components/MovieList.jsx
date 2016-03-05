import React from 'react';

class MovieList extends React.Component {
    handleSearch() {
        window.fetch();
    }

     render() {
        return <div className="container theme-showcase" role="main">
            <div className="jumbotron">
                <p>Let's search for some movies!</p>
                <input type="text" placeholder="Movie title"/>
                <button onClick={this.handleSearch}>Search</button>
            </div>
            <div className="row">
                {this.props.movies.map(function (item, index) {
                    return <div key={index} className="col-xs-6 col-lg-4">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p><a className="btn btn-default" href="#" role="button">View details »</a></p>
                    </div>;
                })}
            </div>
        </div>;
    }
}

export default MovieList;