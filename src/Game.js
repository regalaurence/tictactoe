import React from "react"
import Board from "./components/Board"
import './App.css';

class Game extends React.Component {

  render() {
    return (
      <div className="game">
        <div className="title">
          <h1>Hey!</h1>
          <h2>Let's Play Laurence Rega's Tic Tac Toe.</h2>
          <hr />
        </div>
        <Board
        />
        <div className="game-info">
        </div>
      </div>
    );
  }
}

export default Game
