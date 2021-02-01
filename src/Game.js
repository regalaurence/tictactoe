import React from "react"
import Board from "./components/Board"
import './App.css';

class Game extends React.Component {

  state = {
    isPlayerOneNext: false,
    isPlayerTwoNext: false,
    isGameWon: false,
    isTie: false
  }

  liftTheStateUp = (playerOne, playerTwo, gameWon, isTie) => {
    this.setState({
      isPlayerOneNext: playerOne,
      isPlayerTwoNext: playerTwo,
      isGameWon: gameWon,
      isTie: isTie
    })
  }

  render() {

    return (
      <div className="game">
        <div className="title">
          <h1>Hey!</h1>
          <h2>Let's Play Laurence Rega's Tic Tac Toe.</h2>
          <hr />
        </div>
        <div className="game-info">
          <div>{this.state.isGameWon ?
            <div className="status winner">Player {this.state.isPlayerTwoNext ? "one" : "two"} won !</div>
            :
            <div className="status winner-tease">Who's gonna win this game?</div>
          }
            <div className="status">{this.state.isPlayerOneNext ? "Player One is next, with X" : "Player Two is next, with O"}</div>
          </div>
          <div>{this.state.isTie && <div>It's a tie! </div>}</div>
        </div>
        <Board
          liftTheStateUp={this.liftTheStateUp}
        />
        <div className="game-info">
        </div>
      </div>
    );
  }
}

export default Game
