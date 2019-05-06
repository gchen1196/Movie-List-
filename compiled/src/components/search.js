class Search extends React.Component {
  //input: refers to the text field within form 
  //onchange event handler: everytime user types in input text, invoke cb
  //onclick: evertime user clicks in input text, invoke cb
  //onsubmit: everytime user submits, invoke cb
  //NEED TO STORE INPUT TEXT ON STATE PROP 
  //FOR FORM: do not want page to re-render everytime press enter. use preventDefault() to prevent event from re-rendering
  constructor(props) {
    super(props);
    this.state = {
      text: 'Search...'
    };
  }

  onInputChange(e) {
    this.setState({ text: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.text);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'ui segment' },
      React.createElement(
        'form',
        { className: 'ui form', onSubmit: e => this.onFormSubmit(e) },
        React.createElement('input', { type: 'text', value: this.state.text, onChange: e => this.onInputChange(e) }),
        React.createElement(
          'button',
          null,
          'Go!'
        )
      )
    );
  }
}

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0ZXh0Iiwib25JbnB1dENoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFOLFNBQXFCQyxNQUFNQyxTQUEzQixDQUFxQztBQUNuQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUMsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU07QUFESyxLQUFiO0FBR0Q7O0FBRURDLGdCQUFjQyxDQUFkLEVBQWlCO0FBQ2YsU0FBS0MsUUFBTCxDQUFjLEVBQUNILE1BQU1FLEVBQUVFLE1BQUYsQ0FBU0MsS0FBaEIsRUFBZDtBQUNEOztBQUVEQyxlQUFhSixDQUFiLEVBQWdCO0FBQ2RBLE1BQUVLLGNBQUY7QUFDQUMsWUFBUUMsR0FBUixDQUFZLEtBQUtWLEtBQUwsQ0FBV0MsSUFBdkI7QUFDRDs7QUFFRFUsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxTQUFoQixFQUEwQixVQUFXUixDQUFELElBQU8sS0FBS0ksWUFBTCxDQUFrQkosQ0FBbEIsQ0FBM0M7QUFDRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLSCxLQUFMLENBQVdDLElBQXJDLEVBQTJDLFVBQVdFLENBQUQsSUFBTyxLQUFLRCxhQUFMLENBQW1CQyxDQUFuQixDQUE1RCxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBREYsS0FERjtBQVFEO0FBaENrQzs7QUFtQ3JDLGVBQWVSLE1BQWYiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy9pbnB1dDogcmVmZXJzIHRvIHRoZSB0ZXh0IGZpZWxkIHdpdGhpbiBmb3JtIFxuLy9vbmNoYW5nZSBldmVudCBoYW5kbGVyOiBldmVyeXRpbWUgdXNlciB0eXBlcyBpbiBpbnB1dCB0ZXh0LCBpbnZva2UgY2Jcbi8vb25jbGljazogZXZlcnRpbWUgdXNlciBjbGlja3MgaW4gaW5wdXQgdGV4dCwgaW52b2tlIGNiXG4vL29uc3VibWl0OiBldmVyeXRpbWUgdXNlciBzdWJtaXRzLCBpbnZva2UgY2Jcbi8vTkVFRCBUTyBTVE9SRSBJTlBVVCBURVhUIE9OIFNUQVRFIFBST1AgXG4vL0ZPUiBGT1JNOiBkbyBub3Qgd2FudCBwYWdlIHRvIHJlLXJlbmRlciBldmVyeXRpbWUgcHJlc3MgZW50ZXIuIHVzZSBwcmV2ZW50RGVmYXVsdCgpIHRvIHByZXZlbnQgZXZlbnQgZnJvbSByZS1yZW5kZXJpbmdcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICdTZWFyY2guLi4nXG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGV4dDogZS50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgb25Gb3JtU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50ZXh0KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgc2VnbWVudCc+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ndWkgZm9ybScgb25TdWJtaXQ9eyhlKSA9PiB0aGlzLm9uRm9ybVN1Ym1pdChlKX0+ICBcbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uSW5wdXRDaGFuZ2UoZSl9Lz5cbiAgICAgICAgICA8YnV0dG9uPkdvITwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyAiXX0=