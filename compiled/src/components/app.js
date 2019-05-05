import MovieList from './movielist.js';
import Data from '../data.js';

//app need to determine what user input for movies
//
class App extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'navbar' },
				React.createElement('input', { type: 'text', placeholder: 'Search Movies' }),
				React.createElement(
					'button',
					{ type: 'submit' },
					'Go!'
				)
			),
			React.createElement(MovieList, { movies: Data })
		);
	}
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwiRGF0YSIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxTQUFQLE1BQXNCLGdCQUF0QjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsWUFBakI7O0FBRUE7QUFDQTtBQUNBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2pDQyxVQUFVO0FBQ1QsU0FDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLFFBQWY7QUFDQyxtQ0FBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxlQUEvQixHQUREO0FBRUM7QUFBQTtBQUFBLE9BQVEsTUFBSyxRQUFiO0FBQUE7QUFBQTtBQUZELElBREQ7QUFLQyx1QkFBQyxTQUFELElBQVcsUUFBUUosSUFBbkI7QUFMRCxHQUREO0FBU0E7QUFYZ0M7O0FBY2xDLGVBQWVDLEdBQWYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL21vdmllbGlzdC5qcyc7XG5pbXBvcnQgRGF0YSBmcm9tICcuLi9kYXRhLmpzJztcblxuLy9hcHAgbmVlZCB0byBkZXRlcm1pbmUgd2hhdCB1c2VyIGlucHV0IGZvciBtb3ZpZXNcbi8vXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIgKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyJz5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1NlYXJjaCBNb3ZpZXMnIC8+XG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkdvITwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PE1vdmllTGlzdCBtb3ZpZXM9e0RhdGF9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7ICJdfQ==