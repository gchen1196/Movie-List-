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
        React.createElement('input', { type: 'text', value: this.state.text, onClick: () => this.setState({ text: '' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0ZXh0Iiwib25JbnB1dENoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjYlRleHQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU4sU0FBcUJDLE1BQU1DLFNBQTNCLENBQXFDO0FBQ25DO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0VDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNO0FBREssS0FBYjtBQUdEOztBQUVEQyxnQkFBY0MsQ0FBZCxFQUFpQjtBQUNmLFNBQUtDLFFBQUwsQ0FBYyxFQUFDSCxNQUFNRSxFQUFFRSxNQUFGLENBQVNDLEtBQWhCLEVBQWQ7QUFDRDs7QUFFREMsZUFBYUosQ0FBYixFQUFnQjtBQUNkQSxNQUFFSyxjQUFGO0FBQ0EsU0FBS1QsS0FBTCxDQUFXVSxNQUFYLENBQWtCLEtBQUtULEtBQUwsQ0FBV0MsSUFBN0I7QUFDRDs7QUFFRFMsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxTQUFoQixFQUEwQixVQUFXUCxDQUFELElBQU8sS0FBS0ksWUFBTCxDQUFrQkosQ0FBbEIsQ0FBM0M7QUFDRSx1Q0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLSCxLQUFMLENBQVdDLElBQXJDLEVBQTJDLFNBQVMsTUFBTSxLQUFLRyxRQUFMLENBQWMsRUFBQ0gsTUFBTSxFQUFQLEVBQWQsQ0FBMUQ7QUFDQSxvQkFBV0UsQ0FBRCxJQUFPLEtBQUtELGFBQUwsQ0FBbUJDLENBQW5CLENBRGpCLEdBREY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFERixLQURGO0FBU0Q7QUFwQ2tDOztBQXVDckMsZUFBZVIsTUFBZiIsImZpbGUiOiJzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvL2lucHV0OiByZWZlcnMgdG8gdGhlIHRleHQgZmllbGQgd2l0aGluIGZvcm0gXG4vL29uY2hhbmdlIGV2ZW50IGhhbmRsZXI6IGV2ZXJ5dGltZSB1c2VyIHR5cGVzIGluIGlucHV0IHRleHQsIGludm9rZSBjYlxuLy9vbmNsaWNrOiBldmVydGltZSB1c2VyIGNsaWNrcyBpbiBpbnB1dCB0ZXh0LCBpbnZva2UgY2Jcbi8vb25zdWJtaXQ6IGV2ZXJ5dGltZSB1c2VyIHN1Ym1pdHMsIGludm9rZSBjYlxuLy9ORUVEIFRPIFNUT1JFIElOUFVUIFRFWFQgT04gU1RBVEUgUFJPUCBcbi8vRk9SIEZPUk06IGRvIG5vdCB3YW50IHBhZ2UgdG8gcmUtcmVuZGVyIGV2ZXJ5dGltZSBwcmVzcyBlbnRlci4gdXNlIHByZXZlbnREZWZhdWx0KCkgdG8gcHJldmVudCBldmVudCBmcm9tIHJlLXJlbmRlcmluZ1xuXG4vL0hPVyBUTyBQQVNTIHRoaXMuc3RhdGUudGV4dCBGUk9NIHNlYXJjaCBCQUNLIFVQIHRvIGFwcFxuLy9JTiBDTEFTUyBCQVNFRCwgcHJvcHMgaXMgdXNlZCB3aXRoIHRoaXMucHJvcHNcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRleHQ6ICdTZWFyY2guLi4nXG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGV4dDogZS50YXJnZXQudmFsdWV9KVxuICB9XG5cbiAgb25Gb3JtU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5jYlRleHQodGhpcy5zdGF0ZS50ZXh0KVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSBzZWdtZW50Jz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSd1aSBmb3JtJyBvblN1Ym1pdD17KGUpID0+IHRoaXMub25Gb3JtU3VibWl0KGUpfT4gIFxuICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fSBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHt0ZXh0OiAnJ30pfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5vbklucHV0Q2hhbmdlKGUpfS8+XG4gICAgICAgICAgPGJ1dHRvbj5HbyE8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDsgIl19