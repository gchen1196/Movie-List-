import React from 'react';

class WatchedMovieEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>{this.props.movie.title}</div>
    )
  }
}

export default WatchedMovieEntry;