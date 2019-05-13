import React from 'react';
import MovieEntry from './MovieEntry.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.movieList.map((movie, index) => <MovieEntry getWatchedMovies = {this.props.getWatchedMovies} key={index} movie={movie} />)}
      </div>
    )
  }
}

export default MovieList;