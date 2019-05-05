import MovieList from './movielist.js';
import Data from '../data.js';

//app need to determine what user input for movies
//
class App extends React.Component {
	render () {
		return (
			<div>
				<div className='navbar'>
					<input type='text' placeholder='Search Movies' />
					<button type='submit'>Go!</button>
				</div>
				<MovieList movies={Data}/>
			</div>
		)
	}
}

export default App; 