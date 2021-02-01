import React from "react"

const GameInfo = (props) => {


    return (
        <div className="game-info">
            <div className="title">
                <h1>Hey!</h1>
                <h2>Let's Play Laurence Rega's Tic Tac Toe.</h2>
            </div>

            <div>{props.isGameOver &&
                props.isTie ?
                <div className="status winner">It's a tie! </div>
                :
                props.isGameWon ?
                    <div className="status winner">Player {props.isPlayerTwoNext ? "one" : "two"} won !</div>
                    :
                    <div className="status winner-tease">Who's gonna win this game?</div>
            }
                <div className="status">{props.isPlayerOneNext ? "Player One is next, with X" : "Player Two is next, with O"}</div>
            </div>
        </div>
    );
}

export default GameInfo
