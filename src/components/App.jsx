import React, { Component } from 'react';
import SiteOverview from './SiteOverview';
import ExerciseTemplate from './ExerciseTemplate';
import GeneratorInstructions from '../GeneratorInstructions';
import ExerciseTableListContainer from './ExerciseListContainer/ExerciseTableListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <SiteOverview />
          <ExerciseTemplate />
          <GeneratorInstructions />
          <ExerciseTableListContainer
            exerciseList={this.props.exerciseList}
            chooseRandomExercise={this.props.chooseRandomExercise}
          />
        </div>
      </div>
    );
  }
}

export default App;
