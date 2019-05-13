import React from 'react';
import AddedMoviesEntry from './AddedMoviesEntry.jsx';

class AddedMovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      //create array of movie elements from added movies array using map
      <div>
        {this.props.addedMovies.map((movie, index) => <AddedMoviesEntry key={index} movie={movie}/>)}
      </div>
    )
  }
}

export default AddedMovieList;