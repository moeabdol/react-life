import React, { Component } from 'react';
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';

class Buttons extends Component {
  onSelectHandle = event => {
    this.props.gridSize(event);
  }

  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <button className="btn btn-default" onClick={this.props.playButton}>
            Play
          </button>
          <button className="btn btn-default" onClick={this.props.pauseButton}>
            Pause
          </button>
          <button className="btn btn-default" onClick={this.props.clear}>
            Clear
          </button>
          <button className="btn btn-default" onClick={this.props.slow}>
            Slow
          </button>
          <button className="btn btn-default" onClick={this.props.fast}>
            Fast
          </button>
          <button className="btn btn-default" onClick={this.props.seed}>
            Seed
          </button>
          <DropdownButton
            title="Grid Size"
            id="size-menu"
            onSelect={this.onSelectHandle}>
            <MenuItem eventKey="1">20x10</MenuItem>
            <MenuItem eventKey="2">50x30</MenuItem>
            <MenuItem eventKey="3">70x50</MenuItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;
