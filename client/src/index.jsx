import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './example_movies.js';
import MovieList from './components/MovieList.jsx';
import Search from './components/Search.jsx';
import Add from './components/Add.jsx';
import addedMovies from './added_movies.js';
import AddedMovieList from './components/AddedMovieList.jsx';
import Watch from './components/Watch.jsx';
import watchedMovies from './watched_data.js';
import WatchedMovieList from './components/WatchedMovieList.jsx';


class App extends React.Component {
  constructor(props) {
    //gets all props from extends
    super(props);
    this.state = {
      movieData: Movies,
      query: '',
      addedMovies: addedMovies,
      hasAdded: false,
      watchedMovies: watchedMovies,
      isToggleWatch : false
    };
    this.getSearchText = this.getSearchText.bind(this);
    this.getAddedText = this.getAddedText.bind(this);
    this.getWatchedMovies = this.getWatchedMovies.bind(this);
    this.toggleWatch = this.toggleWatch.bind(this);
  }

  toggleWatch() {
    if (this.state.isToggleWatch === false) {
      this.setState({isToggleWatch: true});
    } else {
      this.setState({isToggleWatch: false});
    }
  }

  getWatchedMovies(title, boolean) {
    console.log('THE TITLE', title);
    console.log(boolean);
    for (var i = 0; i < Movies.length; i++) {
      if (Movies[i]['title'] === title) {
        watchedMovies.push(Movies[i]);
        Movies.splice(i, 1);
      }
    }
    this.setState({watchedMovies: watchedMovies});

  }
  
  getAddedText(text) {
    var newMovie = {};
    newMovie.title = text;
    addedMovies.push(newMovie);
    this.setState({addedMovies: addedMovies});
    this.setState({hasAdded: true});
  }

  getSearchText(text) {
    console.log(text);
    this.setState({query: text})
    var filteredMovies = Movies.filter((movie) => movie.title.includes(text));
    this.setState({movieData: filteredMovies});
  }

  render() {
    if (this.state.movieData.length === 0) {
      return(
        <div>
          <Add getAddedText={this.getAddedText}/>
          <Search getSearchText={this.getSearchText}/>
          <div>{`"${this.state.query}" was not found :(`}</div>
        </div>
      )
    } 
    if (this.state.hasAdded) {
      return(
        <div>
          <Add getAddedText={this.getAddedText}/>
          <AddedMovieList addedMovies={this.state.addedMovies}/>
        </div>
      )
    }
    if (this.state.isToggleWatch) {
      return (
        <div>
          <Add getAddedText={this.getAddedText}/>
          <Search getSearchText={this.getSearchText}/>
          <Watch toggleWatch={this.toggleWatch}/>
          <WatchedMovieList watchedList={this.state.watchedMovies}/>
        </div>
      )
    }
    return(
      <div>
        <Add getAddedText={this.getAddedText}/>
        <Search getSearchText={this.getSearchText}/>
        <Watch toggleWatch={this.toggleWatch}/>
        <MovieList getWatchedMovies = {this.getWatchedMovies}movieList={this.state.movieData} searchedMovie={this.state.searchedMovie}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));