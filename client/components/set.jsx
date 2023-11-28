import React, { useState, useEffect } from 'react';

const Sets = (props) => {
  const [reps, updateReps] = useState(0);
  const [weights, updateWeights] = useState(0);

  const handleInput = (event) => {
    const { value } = event.target;
    return;
  };

  return (
    <div className="SingleSet">
      <label htmlFor="reps">
        reps
        <input type="text" onChange={handleInput} value={reps} />
      </label>
      <label htmlFor="weights">
        weight
        <input type="text" onChange={handleInput} value={weights} />
      </label>
      set {props.number}
    </div>
  );
};

export default Sets;
