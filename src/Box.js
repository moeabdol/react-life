import React, { Component } from 'react';

class Box extends Component {
  selectBox = () => {
    this.props.selectBox(this.props.row, this.props.col);
  }

  render() {
    return (
      <div
        id={this.props.boxId}
        className={this.props.boxClass}
        onClick={this.selectBox}>
      </div>
    );
  }
}

export default Box;
