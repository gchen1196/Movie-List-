class Search extends React.Component {
  //input: refers to the text field within form 
//onchange event handler: everytime user types in input text, invoke cb
//onclick: evertime user clicks in input text, invoke cb
//onsubmit: everytime user submits, invoke cb
//NEED TO STORE INPUT TEXT ON STATE PROP 
//FOR FORM: do not want page to re-render everytime press enter. use preventDefault() to prevent event from re-rendering

//HOW TO PASS this.state.text FROM search BACK UP to app
//IN CLASS BASED, props is used with this.props
  constructor(props) {
    super(props);
    this.state = {
      text: 'Search...'
    }
  }

  onInputChange(e) {
    this.setState({text: e.target.value})
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.cbText(this.state.text)
  }
  
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={(e) => this.onFormSubmit(e)}>  
          <input type='text' value={this.state.text} onClick={() => this.setState({text: ''})}
          onChange={(e) => this.onInputChange(e)}/>
          <button>Go!</button>
        </form>
      </div>
    )
  }
}

export default Search; 