
//EACH COMPONENT ONLY RETURNS ONE DIV
//want to pass every props.movie entry into movielistentry component
const MovieList = props => {
	//can be either movieStr or moviearray 
	var display;
	var inputText = props.movie;
	var movies = props.movies;
	if (inputText === null) {
		display = movies.map((movie, index) => React.createElement(
			"div",
			{ key: index },
			movie.title
		));
	} else {
		var filteredMovies = movies.filter(movie => movie.title.includes(inputText));
		display = filteredMovies.map((movie, index) => React.createElement(
			"div",
			{ key: index },
			movie.title
		));
	}

	return React.createElement(
		"div",
		null,
		display
	);
};

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21vdmllbGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0IiwicHJvcHMiLCJkaXNwbGF5IiwiaW5wdXRUZXh0IiwibW92aWUiLCJtb3ZpZXMiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwiZmlsdGVyZWRNb3ZpZXMiLCJmaWx0ZXIiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxZQUFhQyxLQUFELElBQVc7QUFDNUI7QUFDQSxLQUFJQyxPQUFKO0FBQ0EsS0FBSUMsWUFBWUYsTUFBTUcsS0FBdEI7QUFDQSxLQUFJQyxTQUFTSixNQUFNSSxNQUFuQjtBQUNBLEtBQUlGLGNBQWMsSUFBbEIsRUFBd0I7QUFDdkJELFlBQVVHLE9BQU9DLEdBQVAsQ0FBVyxDQUFDRixLQUFELEVBQVFHLEtBQVIsS0FBa0I7QUFBQTtBQUFBLEtBQUssS0FBS0EsS0FBVjtBQUFrQkgsU0FBTUk7QUFBeEIsR0FBN0IsQ0FBVjtBQUNBLEVBRkQsTUFFTztBQUNOLE1BQUlDLGlCQUFpQkosT0FBT0ssTUFBUCxDQUFjTixTQUFTQSxNQUFNSSxLQUFOLENBQVlHLFFBQVosQ0FBcUJSLFNBQXJCLENBQXZCLENBQXJCO0FBQ0FELFlBQVVPLGVBQWVILEdBQWYsQ0FBbUIsQ0FBQ0YsS0FBRCxFQUFRRyxLQUFSLEtBQWtCO0FBQUE7QUFBQSxLQUFLLEtBQUtBLEtBQVY7QUFBa0JILFNBQU1JO0FBQXhCLEdBQXJDLENBQVY7QUFDQTs7QUFFRCxRQUNDO0FBQUE7QUFBQTtBQUNFTjtBQURGLEVBREQ7QUFLQSxDQWpCRDs7QUFtQkEsZUFBZUYsU0FBZiIsImZpbGUiOiJtb3ZpZWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vRUFDSCBDT01QT05FTlQgT05MWSBSRVRVUk5TIE9ORSBESVZcbi8vd2FudCB0byBwYXNzIGV2ZXJ5IHByb3BzLm1vdmllIGVudHJ5IGludG8gbW92aWVsaXN0ZW50cnkgY29tcG9uZW50XG5jb25zdCBNb3ZpZUxpc3QgPSAocHJvcHMpID0+IHtcblx0Ly9jYW4gYmUgZWl0aGVyIG1vdmllU3RyIG9yIG1vdmllYXJyYXkgXG5cdHZhciBkaXNwbGF5O1xuXHR2YXIgaW5wdXRUZXh0ID0gcHJvcHMubW92aWU7XG5cdHZhciBtb3ZpZXMgPSBwcm9wcy5tb3ZpZXM7XG5cdGlmIChpbnB1dFRleHQgPT09IG51bGwpIHtcblx0XHRkaXNwbGF5ID0gbW92aWVzLm1hcCgobW92aWUsIGluZGV4KSA9PiA8ZGl2IGtleT17aW5kZXh9Pnttb3ZpZS50aXRsZX08L2Rpdj4pXG5cdH0gZWxzZSB7XG5cdFx0dmFyIGZpbHRlcmVkTW92aWVzID0gbW92aWVzLmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS50aXRsZS5pbmNsdWRlcyhpbnB1dFRleHQpKTtcblx0XHRkaXNwbGF5ID0gZmlsdGVyZWRNb3ZpZXMubWFwKChtb3ZpZSwgaW5kZXgpID0+IDxkaXYga2V5PXtpbmRleH0+e21vdmllLnRpdGxlfTwvZGl2Pilcblx0fSBcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHR7ZGlzcGxheX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG5cbiJdfQ==