import React, { Component } from "react";
import Login from "./Login";
import NavBar from "./NavBar";
import EndGame from "./EndGame";
import Game from "./Game";

class Main extends Component {
  state = {
    name: "",
    score: 0,
    showLogIn: true,
    showEndGame: false,
  };
  handleLogin = (name, boolean) => {
    this.setState({ name: name, showLogIn: boolean });
  };
  handleEndGame = (boolean) => {
    if (boolean) {
      this.setState({ showEndGame: boolean, score: this.state.score + 1 });
    } else {
      this.setState({ showEndGame: boolean });
    }
  };
  render() {
      const {name,score,showEndGame,showLogIn} = this.state
    return (
      <div>
        {showLogIn ? <Login name={this.handleLogin} /> : null}
        {showEndGame ? <EndGame newGame={this.handleEndGame} /> : null}
        <NavBar name={name} score={score} />
        <Game endGame={this.handleEndGame} />
      </div>
    );
  }
}

export default Main;
