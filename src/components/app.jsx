import MovieList from './movielist.js';
import Data from '../data.js';
import Search from './search.js';

// Add a search bar so that a user may see if a movie is in the list.
// After a user submits the search, display all matches (or partial matches) to that title.
// Bonus: Handle the case of "no movie by that name found" gracefully.
class App extends React.Component {
	constructor(props) {
		super(props);
	
		//initialize movies list is to show all movies
		this.state = {
			movies: Data, 
			movie: null
		}
		//need to bind this to getTextInput so this refers to App 
		this.getTextInput = this.getTextInput.bind(this);
	}
	//need to create a function to pass down to search as prop that will have access to input text
	getTextInput(text) {
		console.log('APP HAS ACCESS TO', text);
		//'this' works here because of bind 
		this.setState({movie: text})
	}
	render() {
		return (
			<div>
				<div className='ui container' style={{marginTop: '20px'}}>
					<Search cbText={this.getTextInput}/>
				</div>
				<MovieList movies={this.state.movies} movie={this.state.movie}/>
			</div>
		)
	}
}

export default App; 