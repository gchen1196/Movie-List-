import React from 'react';

class AddedMoviesEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watch: 'To Watch'
    };
  }

  onButtonClick(e) {
    e.preventDefault();
    this.setState({watch: 'Watched'})
  }

  render() {
    return (
      <div>
        <span>{this.props.movie.title}</span>
        <button onClick={(e) => this.onButtonClick(e)}>{this.state.watch}</button>
      </div>
    )
  }
}

export default AddedMoviesEntry;