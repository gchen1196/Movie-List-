import React from 'react';
import WatchedMovieEntry from './WatchedMovieEntry.jsx';

class WatchedMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        {this.props.watchedList.map((movie, index) => <WatchedMovieEntry key={index} movie={movie} />)}
      </div>
    )
  }
}

export default WatchedMovieList;