class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Add movie title here'
    }
  }
  onInputChange(e) {
    this.setState({text: e.target.value})
  }
  onFormSubmit(e) {
    e.preventDefault();
    //change the text string to an object movie
    console.log(this.state.text)

  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={(e) => this.onFormSubmit(e)}>
          <input type='text' value={this.state.text} onClick={() => this.setState({text: ''})} onChange={(e) => this.onInputChange(e)}/>
          <button style={{backgroundColor: 'green'}}>Add</button>
        </form>
      </div>
    )
  }
}

export default Add;