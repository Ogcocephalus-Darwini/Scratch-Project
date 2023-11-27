import React, { useState, useEffect } from 'react';
import Sets from './set.jsx';
import { useAppContext } from '../context/appContext.jsx';

const Workout = () => {
  const { exercises, currentWorkout, createWorkout, createExercise } = useAppContext();
  const [sets, updateSets] = useState([<Sets key={1} number="1" />]);
  const [data, updateData] = useState({});
  const [exerciseName, setExerciseName] = useState('BB Bench Press');
  console.log('💥 Current Workout', currentWorkout);

  const handleAddSets = (event) => {
    const newSets = [...sets];
    const i = newSets.length + 1;
    newSets.push(<Sets key={i} number={i} />);
    console.log(newSets);
    return updateSets(newSets);
  };

  const handleInput = (event) => {
    const { value } = event.target;
    return;
  };

  const handleSubmit = (event) => {
    console.log('Submitting workout');
    // declare an object literal
    //set type equal to WorkoutDropList value
    // itterate through all sets and create following object
    /* 
   key = set key {
    reps: 'number'
    weight: 'number'
   }
  */
    return;
  };

  const updateExercise = (e) => {
    setExerciseName(e.target.value);
  };

  return (
    <div className="WorkoutComponent col-center">
      {!currentWorkout && <button onClick={createWorkout}>Create New Workout</button>}
      {currentWorkout && (
        <div className="col-center workout-container">
          <h3>
            Date: {new Date().toISOString().replace('-', '/').split('T')[0].replace('-', '/')}
          </h3>
          {exercises.map((ex) => {
            return (
              <div className="col-center" key={nanoid()}>
                <h3>{ex.name}</h3>
                {ex.sets.map((set, i) => {
                  return (
                    <div className="set" key={nanoid()}>
                      <div className="set-sub">
                        <p>Target Reps: {set.target_reps}</p>
                        <p>Target Weight: {set.target_weight}</p>
                      </div>
                      <div className="set-sub">
                        <p>Actual Reps: {set.actual_reps}</p>
                        <p>Actual Weight: {set.actual_weight}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
          <label htmlFor="exercise">Add Exercises</label>
          <select
            onChange={updateExercise}
            className="WorkoutDropList"
            name="excercise-names"
            defaultValue="BB Bench Press"
          >
            <option value="BB Bench Press">BB Bench Press</option>
            <option value="BB Squat">BB Squat</option>
            <option value="BB Deadlift">BB Deadlift</option>
            <option value="BB Row">BB Row</option>
            <option value="BB Overhead Press">BB Overhead Press</option>
          </select>
          <button onClick={() => createExercise(exerciseName)}>Add Exercise</button>
          {/* <div className="SetsDisplay col-center">
            {sets.map((set) => {
              return set;
            })}
          </div> */}
          {/* <button onClick={handleAddSets}> Add Sets </button> */}

          {/* <button onClick={handleSubmit}>Submit Workout</button> */}
        </div>
      )}
    </div>
  );
};

export default Workout;
