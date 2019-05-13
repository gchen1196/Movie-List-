import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Add movie title here'
    };
  }

  onInputClick(e) {
    e.preventDefault();
    this.setState({text: ''});
  }

  onInputChange(e) {
    e.preventDefault();
    this.setState({text: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.getAddedText(this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <label>
          <input type="text" value={this.state.text} onChange={(e) => this.onInputChange(e)} onClick={(e) => this.onInputClick(e)}/>
        </label>
        <button>Add</button>
      </form>
    )
  }
}

export default Add;