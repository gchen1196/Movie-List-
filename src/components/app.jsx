import MovieEntry from './movielist.js';
import Data from '../data.js';

//app need to determine what user input for movies
//
const App = () => {
    return (
        <div>
            <div className='navbar'>
                <input type='text' placeholder='Search Movies' />
                <button type='submit'>Go!</button>
            </div>
            <div className='movielist'>
                <MovieEntry movies={Data} />
            </div>
        </div>
    )
}
export default App; 