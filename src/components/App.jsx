import React, { Component } from 'react';
// import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import Header from './Header';
import SiteOverview from './SiteOverview';
import ExerciseTemplate from './ExerciseTemplate';
import GeneratorInstructions from '../GeneratorInstructions';
import ExerciseTableList from './ExerciseListContainer/ExerciseTableList';


class App extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <SiteOverview />
          <ExerciseTemplate />
          <GeneratorInstructions />
          <ExerciseTableList
            exerciseList={this.props.exerciseList}
            chooseRandomExercise={this.props.chooseRandomExercise}
          />
        </div>
      </div>
    );
  }
}

export default App;
