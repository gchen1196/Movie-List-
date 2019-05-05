import MovieEntry from './movielist.js';
import Data from '../data.js';

//app need to determine what user input for movies
//
const App = () => {
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
        React.createElement(
            'div',
            { className: 'movielist' },
            React.createElement(MovieEntry, { movies: Data })
        )
    );
};
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FwcC5qc3giXSwibmFtZXMiOlsiTW92aWVFbnRyeSIsIkRhdGEiLCJBcHAiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFVBQVAsTUFBdUIsZ0JBQXZCO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQixZQUFqQjs7QUFFQTtBQUNBO0FBQ0EsTUFBTUMsTUFBTSxNQUFNO0FBQ2QsV0FDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLFFBQWY7QUFDSSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsYUFBWSxlQUEvQixHQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFRLE1BQUssUUFBYjtBQUFBO0FBQUE7QUFGSixTQURKO0FBS0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQ0ksZ0NBQUMsVUFBRCxJQUFZLFFBQVFELElBQXBCO0FBREo7QUFMSixLQURKO0FBV0gsQ0FaRDtBQWFBLGVBQWVDLEdBQWYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllRW50cnkgZnJvbSAnLi9tb3ZpZWxpc3QuanMnO1xuaW1wb3J0IERhdGEgZnJvbSAnLi4vZGF0YS5qcyc7XG5cbi8vYXBwIG5lZWQgdG8gZGV0ZXJtaW5lIHdoYXQgdXNlciBpbnB1dCBmb3IgbW92aWVzXG4vL1xuY29uc3QgQXBwID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyJz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1NlYXJjaCBNb3ZpZXMnIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkdvITwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWVsaXN0Jz5cbiAgICAgICAgICAgICAgICA8TW92aWVFbnRyeSBtb3ZpZXM9e0RhdGF9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQXBwOyAiXX0=