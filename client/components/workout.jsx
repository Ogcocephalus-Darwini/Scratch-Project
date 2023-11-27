import React, { useState, useEffect } from 'react';
import Sets from './set.jsx';

const Workout = () => {
  const [sets, updateSets] = useState([<Sets />]);
  const [] = useState();

  const handleAddSets = (event) => {
    const newSets = [...sets];
    newSets.push(<Sets />);
    return updateSets(newSets);
  };

  const handleInput = (event) => {
    const { value } = event.target;
    return;
  };

  return (
    <div className="WorkoutComponet">
      <label htmlFor="exercise">Exercises</label>
      <select className="WorkoutDropList" name="excercise-names">
        <option value="bench">BB Bench Press</option>
        <option value="squat">BB Squat</option>
        <option value="de">BB Deadlift</option>
        <option value="row">BB Row</option>
        <option value="overhead">BB Overhead Press</option>
      </select>
      <div className="SetsDisplay">
        {sets.map((set) => {
          return set;
        })}
      </div>
      <button onClick={handleAddSets}> Add Sets </button>

      <button onClick={() => {}}>Submit Workout</button>
    </div>
  );
};

export default Workout;
