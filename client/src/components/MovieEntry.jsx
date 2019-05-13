import React from 'react';

class MovieEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false
    };
  }

  onButtonClick(e) {
    e.preventDefault();
    //send back title and the watched condition
    // console.log(this.state.watched);
    this.props.getWatchedMovies(this.props.movie.title, this.state.watched);
    this.setState({watched: true})
  }

  render() {
    if(this.state.watched) {
      return (
        <div>
          <span>{this.props.movie.title}</span>
          <button onClick={(e) => this.onButtonClick(e)}>Watched</button>
        </div>
      )
    }
    return (
      <div>
        <span>{this.props.movie.title}</span>
        <button onClick={(e) => this.onButtonClick(e)}>Watch</button>
      </div>
    )
  }
}

export default MovieEntry;