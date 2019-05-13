import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Search...'
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputClick = this.onInputClick.bind(this);
  }

  onInputClick() {
    this.setState({text: ''});
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({text: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.setState({text: ''})
    this.props.getSearchText(this.state.text);
  }

  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <label>
          <input type="text" value={this.state.text} onChange={(e) => this.onInputChange(e)} onClick={this.onInputClick}/>
        </label>
        <button>Go!</button>       
      </form>
    )
  }
}

export default Search;