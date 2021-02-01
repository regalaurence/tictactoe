import React from "react"
import OneSquare from "./OneSquare"
import { getAllLinesToCheck } from '../util';

const initialSize = 3

class Board extends React.Component {

    state = {
        squares: new Array(initialSize ** 2).fill(null),
        isPlayerOneNext: true,
        isPlayerTwoNext: false,
        isGameWon: false,
        isGameOver: false,
        isTie: false,
        squaresToCheck: getAllLinesToCheck(initialSize),
        squareSize: initialSize
    }

    handleClick(i) {
        let squaresCopy = [...this.state.squares]
        squaresCopy[i] = this.state.isPlayerOneNext ? 'X' : 'O';
        if (!this.state.isGameOver) {
            if (this.state.squares[i] === null) {
                this.setState({
                    squares: squaresCopy,
                    isPlayerOneNext: !this.state.isPlayerOneNext,
                    isPlayerTwoNext: !this.state.isPlayerTwoNext
                })
            }
        }
    }

    checkWinner = () => {
        const linesToCheck = this.getStateLinesToCheck()
        console.log(linesToCheck, this.state.squaresToCheck);
        if (!this.state.isGameOver) {
            if (!this.state.isGameWon && !this.state.isGameOver)
                for (let i = 0; i < linesToCheck.length; i++) {
                    if (!linesToCheck[i].includes(null)) {
                        if (linesToCheck[i][0] === linesToCheck[i][1] && linesToCheck[i][0] === linesToCheck[i][2]) {
                            this.setState({
                                isGameWon: true,
                                isGameOver: true
                            })
                        }
                    }
                }
            else if (!this.state.squares.includes(null) && !this.state.isGameWon) {
                this.setState({
                    isTie: true,
                    isGameOver: true
                })
            }
        }
    }

    getStateLinesToCheck = () => {
        return this.state.squaresToCheck.map((array) => array.map(number => this.state.squares[number]))
    }

    newGameHandler = () => {
        this.setState({
            squares: new Array(this.state.squareSize ** 2).fill(null),
            isPlayerOneNext: true,
            isPlayerTwoNext: false,
            isGameWon: false,
            isGameOver: false,
            isTie: false,
            squaresToCheck: getAllLinesToCheck(this.state.squareSize)
        })
    }
    renderSquares = () => {
        const arrayOfRows = this.state.squares.reduce(
            (accumulated, currentSquare, currentIndex) => {
                const currentNextIndex = Math.floor(currentIndex / this.state.squareSize);
                const temp = accumulated[currentNextIndex] || []
                accumulated[currentNextIndex] = [...temp, { value: currentSquare, index: currentIndex}]
                return accumulated
            }, []
        )
        const rows = arrayOfRows.map(items => (
            <div className='board-row'>
             {
                 items.map((item) => {
                     return (
                         <OneSquare
                            value={item.value}
                            onClick={() => this.handleClick(item.index)}
                            key={item.index}
                         />
                     )
                 })
             }
            </div>
        ))
        return rows
    }

    incrementSize = () => {
        if (this.state.squareSize < 6) {
            const squareSize = this.state.squareSize + 1;
            this.setState({
                squareSize, 
                squares: new Array(squareSize ** 2).fill(null),
                squaresToCheck: getAllLinesToCheck(squareSize),
                isPlayerOneNext: true,
                isPlayerTwoNext: false,
                isGameWon: false,
                isGameOver: false,
                isTie: false,
            })
        }
        else alert(`That's big enough!`)
        
    }

    decrementSize = () => {
        if (this.state.squareSize > 3) {
        const squareSize = this.state.squareSize - 1;
        this.setState({
            squareSize, 
            squares: new Array(squareSize ** 2).fill(null),
            squaresToCheck: getAllLinesToCheck(squareSize),
            isPlayerOneNext: true,
            isPlayerTwoNext: false,
            isGameWon: false,
            isGameOver: false,
            isTie: false,
        })
    }
    else alert(`That's small enough!`)
    }

    render() {

        this.checkWinner()

        return (
            <>
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
                <div>
                <button className="play-btn" onClick={this.newGameHandler}>Refresh the board</button>
                <button className="play-btn" onClick={this.incrementSize}>Play with more squares</button>
                <button className="play-btn" onClick={this.decrementSize}>Play with less squares</button>
                </div>
                <div className="game-board">
                <div className='rows-container'>
                {this.renderSquares()}
                
                </div>
                
                 </div>
            </>
        );
    }
}

export default Board