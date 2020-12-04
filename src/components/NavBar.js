import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar">
        <div className="game-title">Memory</div>
        <div className="player-name">Name: {name}</div>
        <div className="score">Score: {score}</div>
      </div>
    );
  }
}

export default NavBar;
