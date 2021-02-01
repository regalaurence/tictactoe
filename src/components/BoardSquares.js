import React from "react"

class BoardSquares extends React.Component {

  render() {

    return (
      <div className='rows-container'>
          {this.props.renderSquares()}
      </div>
    );
  }
}

export default BoardSquares
