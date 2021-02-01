import React from "react"
import GameBoard from './components/GameBoard'
import './App.css';

class App extends React.Component {


  render() {

    return (
      <div className="game">
        <GameBoard
        />
      </div>
    );
  }
}

export default App
