var React = require('react'),
    ReactDOM = require('react-dom'),
    Header = require('./components/Header.jsx'),
    MovieSearch = require('./components/MovieSearch.jsx').default,
    Footer = require('./components/Footer.jsx');

function App(props) {
    var movies = [];
    return <div>
        <Header />
        <div className="container">
            <div className="row row-offcanvas row-offcanvas-right">
                <MovieSearch movies={movies} />
                <Footer />
            </div>
        </div>
    </div>;
}
ReactDOM.render(<App />, document.getElementById('content'));