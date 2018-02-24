import React from 'react';
import ExerciseListSelector from './ExerciseSelector'
import ExerciseListContainer from './ExerciseListContainer/ExerciseListContainer'

const App = (props) => (
  <div>
    <ExerciseListSelector onExerciseSelect={props.onExerciseSelect} />
    <ExerciseListContainer />
  </div>
)

export default App;
