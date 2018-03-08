import React from 'react';
import SiteOverview from './SiteOverview';
import ExerciseTemplate from './ExerciseTemplate';
import GeneratorInstructions from '../GeneratorInstructions';
import ExerciseTableListContainer from './ExerciseListContainer/ExerciseTableListContainer';

const App = ({exerciseList, chooseRandomExercise}) => (
  <div>
    <div className="container" style={{paddingBottom:120}}>
      <SiteOverview />
      <ExerciseTemplate />
      <GeneratorInstructions />
      <ExerciseTableListContainer
        exerciseList={exerciseList}
        chooseRandomExercise={chooseRandomExercise}
      />
    </div>
  </div>
);

export default App;
