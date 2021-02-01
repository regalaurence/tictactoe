import React from "react"

const GameInfo = (props) => {


    return (
        <div className="game-info">
            <div>{props.isGameWon ?
                <div className="status winner">Player {props.isPlayerTwoNext ? "one" : "two"} won !</div>
                :
                <div className="status winner-tease">Who's gonna win this game?</div>
            }
                <div className="status">{props.isPlayerOneNext ? "Player One is next, with X" : "Player Two is next, with O"}</div>
            </div>
            <div>{props.isTie && <div>It's a tie! </div>}</div>
        </div>
    );

}

export default GameInfo
