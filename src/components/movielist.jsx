
//want to pass every props.movie entry into movielistentry component
const MovieList = (props) => {
	return (
		<div>
			{props.movies.map(movie => <div>{movie.title}</div>)}
		</div>
	)
}

export default MovieList;

