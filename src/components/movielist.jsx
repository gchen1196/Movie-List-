
//EACH COMPONENT ONLY RETURNS ONE DIV
//want to pass every props.movie entry into movielistentry component
const MovieList = (props) => {
	//can be either movieStr or moviearray 
	var movie = props.movie;
	var movies = props.movies;
	
	return (
		<div>
			{props.movies.map(movie => <div>{movie.title}</div>)}
		</div>
	)
}

export default MovieList;

