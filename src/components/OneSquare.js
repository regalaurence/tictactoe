import React from "react"

const OneSquare = (props) => {
  return (
    <div className="square" >
      <button className="square-btn" onClick={props.onClick}>
        <p className='square-btn-text'>
          {props.value}
        </p>
      </button>
    </div>

  );
}

export default OneSquare