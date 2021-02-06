import React from 'react';

import Aux from './Aux';

const Controls = (props) => {
  function keypress(ev) {
    if (ev.key === "Enter") {
      props.guessed();
    }
  }

  function handleChange(e) {
    props.changed(e.target.value);
  }

  return (
    <Aux>
      <input
        type="text"
        value={props.value}
        onChange={handleChange}
        onKeyPress={keypress}></input>
      <button id="enter" onClick={() => props.guessed()}>OK</button>
    </Aux>
  )
}

export default Controls;