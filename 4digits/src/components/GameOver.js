import React from 'react';

const GameOver = (props) => {
  let text = null;

  if (props.gameOver && !props.gameWon) {
    text = 'Game over. You Lost :('
  }
  else {
    text = 'Game over. You won! :)'
  }

  return <h5>{text}</h5>
}

export default GameOver;