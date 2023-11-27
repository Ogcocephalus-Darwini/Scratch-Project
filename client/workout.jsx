import React, { useState, useEffect } from 'react';

const Workout = () => {
  const set = () => {
    return (
      <div>
        <label htmlFor="reps">
          Reps
          <input type="text" />
        </label>
        <label htmlFor="weights">
          Weights
          <input type="text" />
        </label>
        Set
      </div>
    );
  };

  const [sets, updateSets] = useState([set]);

  const handleAddSets = () => {
    const newSets = [...sets];
    newSets.push(set);
    return updateSets(newSets);
  };

  return (
    <div class="WorkoutComponet">
      <label htmlFor="exercise">Exercises</label>
      <select class="WorkoutDropList" name="excercise-names">
        <option value="bench">BB Bench Press</option>
        <option value="squat">BB Squat</option>
        <option value="de">BB Deadlift</option>
        <option value="row">BB Row</option>
        <option value="overhead">BB Overhead Press</option>
      </select>
      <div class="SetsDisplay">
        {/* {
                sets.map(set => {
                    <set/>
                })
            } */}
      </div>
      <button onClick={handleAddSets}> Add Sets </button>

      <button onClick={() => {}}>Submit Workout</button>
    </div>
  );
};

export default Workout;
