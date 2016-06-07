import React from 'react';

class MovieList extends React.Component {
    render() {
        return <div className="row">
            {this.props.movies.map(function (item, index) {

                let image = null;
                if(item.poster_path) {
                    image = "http://image.tmdb.org/t/p/w150/" + item.poster_path;
                }
                else if(item.backdrop_path) {
                    image = "http://image.tmdb.org/t/p/w150/" + item.backdrop_path
                }
                return <div key={index} className="col-xs-6 col-lg-4">
                        <h2>{item.title}</h2>
                        <img src={image} />
                        <p>{item.description}</p>
                        <p><a className="btn btn-default" href="#" role="button">View details »</a></p>
                       </div>;
            })}
        </div>
    }
}

export default MovieList;