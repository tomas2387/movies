import React from 'react';

class MovieList extends React.Component {
    render() {
        return <div className="row">
            {this.props.movies.map(function (item, index) {
                return <div key={index} className="col-xs-6 col-lg-4">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p><a className="btn btn-default" href="#" role="button">View details »</a></p>
                       </div>;
            })}
        </div>
    }
}

export default MovieList;