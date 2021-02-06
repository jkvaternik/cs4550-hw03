import React, { useState } from 'react';
import { createSecret, isGuessValid, bullsAndCows, isGameWon, isGameOver } from './game';

import Guesses from './components/Guesses';
import GameOver from './components/GameOver';
import Error from './components/Error/Error';
import Controls from './components/Controls';
import './App.css';

function App() {

  const [state, setState] = useState({
    secret: createSecret(),
    guesses: [],
    guess: '',
    hasError: false,
    errorMessage: ''
  });

  let gameOver = isGameOver(state.guesses);
  let gameWon = isGameWon(state.guesses, state.secret);

  // Modified from the 4550 lectures
  function updateGuess(text) {
    if (text.length > 4) {
      text = text.slice(0, 4);
    }
    setState({
      ...state,
      guess: text,
    });
  }

  function makeGuess() {
    if (isGuessValid(state.guess)) {
      setState({
        ...state,
        hasError: false,
        guesses: [
          ...state.guesses,
          {
            guess: state.guess,
            result: bullsAndCows(state.secret, state.guess)
          }
        ],
        guess: ''
      });
    }
    else {
      /* 
      Design choice: User's guesses aren't deleted when entered
      incorrectly, this is to allow users to change their original
      guesses to fit the reqs.
      */
      setState({
        ...state,
        hasError: true,
        errorMessage: 'Guess is not four unique digits.'
      });
    }
  }

  function newGameHandler() {
    setState({
      ...state,
      secret: createSecret(),
      guesses: [],
      guess: ''
    });
  }

  return (
    <section className="game">
      {state.hasError ? <Error message={state.errorMessage} /> : null}
      <h2>4digits</h2>
      <button onClick={newGameHandler}>New Game</button>
      <div style={{ float: 'clear' }}>
        <p>
          Welcome to 4digits! A random sequence of 4 unique digits is generated for you to guess. If the matching digits are in their right positions, they are "bulls" (As), if in different positions, they are "cows" (Bs). You have 8 attempts to guess the number. Good luck!
        </p>
        {gameOver || gameWon ?
          <GameOver gameOver={gameOver} gameWon={gameWon} /> :
          <Controls
            value={state.guess}
            changed={updateGuess}
            guessed={makeGuess} />}
        <Guesses guesses={state.guesses} />
      </div>
    </section>
  );
}

export default App;