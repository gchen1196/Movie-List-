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
			//need to bind this to getTextInput so this refers to App 
		};this.getTextInput = this.getTextInput.bind(this);
	}
	//need to create a function to pass down to search as prop that will have access to input text
	getTextInput(text) {
		console.log('APP HAS ACCESS TO', text);
		//'this' works here because of bind 
		this.setState({ movie: text });
	}
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'ui container', style: { marginTop: '20px' } },
				React.createElement(Search, { cbText: this.getTextInput })
			),
			React.createElement(MovieList, { movies: this.state.movies, movie: this.state.movie })
		);
	}
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiRGF0YSIsIlNlYXJjaCIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwibW92aWUiLCJnZXRUZXh0SW5wdXQiLCJiaW5kIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInJlbmRlciIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFlBQWpCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixhQUFuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNqQ0MsYUFBWUMsS0FBWixFQUFtQjtBQUNsQixRQUFNQSxLQUFOOztBQUVBO0FBQ0EsT0FBS0MsS0FBTCxHQUFhO0FBQ1pDLFdBQVFSLElBREk7QUFFWlMsVUFBTztBQUVSO0FBSmEsR0FBYixDQUtBLEtBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQTtBQUNEO0FBQ0FELGNBQWFFLElBQWIsRUFBbUI7QUFDbEJDLFVBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsSUFBakM7QUFDQTtBQUNBLE9BQUtHLFFBQUwsQ0FBYyxFQUFDTixPQUFPRyxJQUFSLEVBQWQ7QUFDQTtBQUNESSxVQUFTO0FBQ1IsU0FDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLGNBQWYsRUFBOEIsT0FBTyxFQUFDQyxXQUFXLE1BQVosRUFBckM7QUFDQyx3QkFBQyxNQUFELElBQVEsUUFBUSxLQUFLUCxZQUFyQjtBQURELElBREQ7QUFJQyx1QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLSCxLQUFMLENBQVdDLE1BQTlCLEVBQXNDLE9BQU8sS0FBS0QsS0FBTCxDQUFXRSxLQUF4RDtBQUpELEdBREQ7QUFRQTtBQTNCZ0M7O0FBOEJsQyxlQUFlUCxHQUFmIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9tb3ZpZWxpc3QuanMnO1xuaW1wb3J0IERhdGEgZnJvbSAnLi4vZGF0YS5qcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoLmpzJztcblxuLy8gQWRkIGEgc2VhcmNoIGJhciBzbyB0aGF0IGEgdXNlciBtYXkgc2VlIGlmIGEgbW92aWUgaXMgaW4gdGhlIGxpc3QuXG4vLyBBZnRlciBhIHVzZXIgc3VibWl0cyB0aGUgc2VhcmNoLCBkaXNwbGF5IGFsbCBtYXRjaGVzIChvciBwYXJ0aWFsIG1hdGNoZXMpIHRvIHRoYXQgdGl0bGUuXG4vLyBCb251czogSGFuZGxlIHRoZSBjYXNlIG9mIFwibm8gbW92aWUgYnkgdGhhdCBuYW1lIGZvdW5kXCIgZ3JhY2VmdWxseS5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcblx0XHQvL2luaXRpYWxpemUgbW92aWVzIGxpc3QgaXMgdG8gc2hvdyBhbGwgbW92aWVzXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogRGF0YSwgXG5cdFx0XHRtb3ZpZTogbnVsbFxuXHRcdH1cblx0XHQvL25lZWQgdG8gYmluZCB0aGlzIHRvIGdldFRleHRJbnB1dCBzbyB0aGlzIHJlZmVycyB0byBBcHAgXG5cdFx0dGhpcy5nZXRUZXh0SW5wdXQgPSB0aGlzLmdldFRleHRJbnB1dC5iaW5kKHRoaXMpO1xuXHR9XG5cdC8vbmVlZCB0byBjcmVhdGUgYSBmdW5jdGlvbiB0byBwYXNzIGRvd24gdG8gc2VhcmNoIGFzIHByb3AgdGhhdCB3aWxsIGhhdmUgYWNjZXNzIHRvIGlucHV0IHRleHRcblx0Z2V0VGV4dElucHV0KHRleHQpIHtcblx0XHRjb25zb2xlLmxvZygnQVBQIEhBUyBBQ0NFU1MgVE8nLCB0ZXh0KTtcblx0XHQvLyd0aGlzJyB3b3JrcyBoZXJlIGJlY2F1c2Ugb2YgYmluZCBcblx0XHR0aGlzLnNldFN0YXRlKHttb3ZpZTogdGV4dH0pXG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndWkgY29udGFpbmVyJyBzdHlsZT17e21hcmdpblRvcDogJzIwcHgnfX0+XG5cdFx0XHRcdFx0PFNlYXJjaCBjYlRleHQ9e3RoaXMuZ2V0VGV4dElucHV0fS8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9IG1vdmllPXt0aGlzLnN0YXRlLm1vdmllfS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyAiXX0=