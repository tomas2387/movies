var React = require('react'),
    ReactDOM = require('react-dom'),
    Header = require('./components/Header.jsx'),
    MovieList = require('./components/MovieList.jsx').default,
    Footer = require('./components/Footer.jsx');

function App(props) {
    var movies = [];
    return <div>
        <Header />
        <div className="container">
            <div className="row row-offcanvas row-offcanvas-right">
                <MovieList movies={movies} />
                <Footer />
            </div>
        </div>
    </div>;
}
ReactDOM.render(<App />, document.getElementById('content'));