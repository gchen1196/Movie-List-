class Add extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Add movie title here'
    };
  }
  onInputChange(e) {
    this.setState({ text: e.target.value });
  }
  onFormSubmit(e) {
    e.preventDefault();
    //change the text string to an object movie
    console.log(this.state.text);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'ui segment' },
      React.createElement(
        'form',
        { className: 'ui form', onSubmit: e => this.onFormSubmit(e) },
        React.createElement('input', { type: 'text', value: this.state.text, onClick: () => this.setState({ text: '' }), onChange: e => this.onInputChange(e) }),
        React.createElement(
          'button',
          { style: { backgroundColor: 'green' } },
          'Add'
        )
      )
    );
  }
}

export default Add;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2FkZC5qc3giXSwibmFtZXMiOlsiQWRkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0ZXh0Iiwib25JbnB1dENoYW5nZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwib25Gb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQzs7QUFFaENDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNO0FBREssS0FBYjtBQUdEO0FBQ0RDLGdCQUFjQyxDQUFkLEVBQWlCO0FBQ2YsU0FBS0MsUUFBTCxDQUFjLEVBQUNILE1BQU1FLEVBQUVFLE1BQUYsQ0FBU0MsS0FBaEIsRUFBZDtBQUNEO0FBQ0RDLGVBQWFKLENBQWIsRUFBZ0I7QUFDZEEsTUFBRUssY0FBRjtBQUNBO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWSxLQUFLVixLQUFMLENBQVdDLElBQXZCO0FBRUQ7O0FBRURVLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsU0FBaEIsRUFBMEIsVUFBV1IsQ0FBRCxJQUFPLEtBQUtJLFlBQUwsQ0FBa0JKLENBQWxCLENBQTNDO0FBQ0UsdUNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS0gsS0FBTCxDQUFXQyxJQUFyQyxFQUEyQyxTQUFTLE1BQU0sS0FBS0csUUFBTCxDQUFjLEVBQUNILE1BQU0sRUFBUCxFQUFkLENBQTFELEVBQXFGLFVBQVdFLENBQUQsSUFBTyxLQUFLRCxhQUFMLENBQW1CQyxDQUFuQixDQUF0RyxHQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsT0FBTyxFQUFDUyxpQkFBaUIsT0FBbEIsRUFBZjtBQUFBO0FBQUE7QUFGRjtBQURGLEtBREY7QUFRRDtBQTNCK0I7O0FBOEJsQyxlQUFlakIsR0FBZiIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBZGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXh0OiAnQWRkIG1vdmllIHRpdGxlIGhlcmUnXG4gICAgfVxuICB9XG4gIG9uSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3RleHQ6IGUudGFyZ2V0LnZhbHVlfSlcbiAgfVxuICBvbkZvcm1TdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL2NoYW5nZSB0aGUgdGV4dCBzdHJpbmcgdG8gYW4gb2JqZWN0IG1vdmllXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS50ZXh0KVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSBzZWdtZW50Jz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSd1aSBmb3JtJyBvblN1Ym1pdD17KGUpID0+IHRoaXMub25Gb3JtU3VibWl0KGUpfT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH0gb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7dGV4dDogJyd9KX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLm9uSW5wdXRDaGFuZ2UoZSl9Lz5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nfX0+QWRkPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGQ7Il19