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
		}
	}
	render () {
		return (
			<div>
				<div className='ui container' style={{marginTop: '20px'}}>
					<Search />
				</div>
				<MovieList movies={this.state.movies}/>
			</div>
		)
	}
}

export default App; 