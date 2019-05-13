import React from 'react';

class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickWatch(e) {
    e.preventDefault();
    //render only movielist
    this.props.toggleWatch();
  }

  render() {
    return (
      <span>
        <button onClick={(e) => this.onClickWatch(e)}>Watched</button>
        <button onClick={(e) => this.onClickWatch(e)}>To Watch</button>
      </span>
    )
  }
}

export default Watch;