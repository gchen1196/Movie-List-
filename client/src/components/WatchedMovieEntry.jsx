import React from 'react';
import axios from 'axios';

class WatchedMovieEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResults: false
    };
  }

  onTitleClick(e) {
    e.preventDefault();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key={4c58a66379a6f4b9fc29656650894eb7}&query=${this.props.movie.title}`)
    .then((result) => {
      this.setState({rating: result.results[0].vote_average, popularity: result.results[0].popularity,language: result.results[0].original_language, showResults: true })
    })
    .catch()
  }

  render() {
    if (this.state.showResults) {
      return(
        <div>
          <div onClick={(e) => {this.onTitleClick(e)}}>{this.props.movie.title}</div>
          <div>{`Ratings: ${this.state.rating}`}</div>
          <div>{`Popularity: ${this.state.popularity}`}</div>
          <div>{`Language: ${this.state.language}`}</div>
        </div>
      )
    }
    return(
      <div onClick={(e) => {this.onTitleClick(e)}}>{this.props.movie.title}</div>
    )
  }
}

export default WatchedMovieEntry;