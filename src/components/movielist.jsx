
//EACH COMPONENT ONLY RETURNS ONE DIV
//want to pass every props.movie entry into movielistentry component
const MovieList = (props) => {
	//can be either movieStr or moviearray 
	var display;
	var inputText = props.movie;
	var movies = props.movies;
	if (inputText === null) {
		display = movies.map((movie, index) => <div key={index}>{movie.title}</div>)
	} else {
		var filteredMovies = movies.filter(movie => movie.title.includes(inputText));
		display = filteredMovies.map((movie, index) => <div key={index}>{movie.title}</div>)
	} 

	return (
		<div>
			{display}
		</div>
	)
}

export default MovieList;

