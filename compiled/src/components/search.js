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
      text: null
    };
  }

  onInputChange(e) {
    this.setState({ text: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.cbText(this.state.text);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'ui segment' },
      React.createElement(
        'form',
        { className: 'ui form', onSubmit: e => this.onFormSubmit(e) },
        React.createElement('input', { type: 'text', value: this.state.text,
          onChange: e => this.onInputChange(e) }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0ZXh0Iiwib25JbnB1dENoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjYlRleHQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU4sU0FBcUJDLE1BQU1DLFNBQTNCLENBQXFDO0FBQ25DO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0VDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNO0FBREssS0FBYjtBQUdEOztBQUVEQyxnQkFBY0MsQ0FBZCxFQUFpQjtBQUNmLFNBQUtDLFFBQUwsQ0FBYyxFQUFDSCxNQUFNRSxFQUFFRSxNQUFGLENBQVNDLEtBQWhCLEVBQWQ7QUFDRDs7QUFFREMsZUFBYUosQ0FBYixFQUFnQjtBQUNkQSxNQUFFSyxjQUFGO0FBQ0EsU0FBS1QsS0FBTCxDQUFXVSxNQUFYLENBQWtCLEtBQUtULEtBQUwsQ0FBV0MsSUFBN0I7QUFDRDs7QUFFRFMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxTQUFoQixFQUEwQixVQUFXUCxDQUFELElBQU8sS0FBS0ksWUFBTCxDQUFrQkosQ0FBbEIsQ0FBM0M7QUFDRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLSCxLQUFMLENBQVdDLElBQXJDO0FBQ0Esb0JBQVdFLENBQUQsSUFBTyxLQUFLRCxhQUFMLENBQW1CQyxDQUFuQixDQURqQixHQURGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBREYsS0FERjtBQVNEO0FBcENrQzs7QUF1Q3JDLGVBQWVSLE1BQWYiLCJmaWxlIjoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgLy9pbnB1dDogcmVmZXJzIHRvIHRoZSB0ZXh0IGZpZWxkIHdpdGhpbiBmb3JtIFxuLy9vbmNoYW5nZSBldmVudCBoYW5kbGVyOiBldmVyeXRpbWUgdXNlciB0eXBlcyBpbiBpbnB1dCB0ZXh0LCBpbnZva2UgY2Jcbi8vb25jbGljazogZXZlcnRpbWUgdXNlciBjbGlja3MgaW4gaW5wdXQgdGV4dCwgaW52b2tlIGNiXG4vL29uc3VibWl0OiBldmVyeXRpbWUgdXNlciBzdWJtaXRzLCBpbnZva2UgY2Jcbi8vTkVFRCBUTyBTVE9SRSBJTlBVVCBURVhUIE9OIFNUQVRFIFBST1AgXG4vL0ZPUiBGT1JNOiBkbyBub3Qgd2FudCBwYWdlIHRvIHJlLXJlbmRlciBldmVyeXRpbWUgcHJlc3MgZW50ZXIuIHVzZSBwcmV2ZW50RGVmYXVsdCgpIHRvIHByZXZlbnQgZXZlbnQgZnJvbSByZS1yZW5kZXJpbmdcblxuLy9IT1cgVE8gUEFTUyB0aGlzLnN0YXRlLnRleHQgRlJPTSBzZWFyY2ggQkFDSyBVUCB0byBhcHBcbi8vSU4gQ0xBU1MgQkFTRUQsIHByb3BzIGlzIHVzZWQgd2l0aCB0aGlzLnByb3BzXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0OiBudWxsXG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGV4dDogZS50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgb25Gb3JtU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5jYlRleHQodGhpcy5zdGF0ZS50ZXh0KVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSBzZWdtZW50Jz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSd1aSBmb3JtJyBvblN1Ym1pdD17KGUpID0+IHRoaXMub25Gb3JtU3VibWl0KGUpfT4gIFxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbklucHV0Q2hhbmdlKGUpfS8+XG4gICAgICAgICAgPGJ1dHRvbj5HbyE8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsgIl19