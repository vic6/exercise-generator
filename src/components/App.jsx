import React, { Component } from 'react';
// import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import Header from './Header';
import SiteOverview from './SiteOverview';
import ExerciseListSelector from './ExerciseGenerator';
import ExerciseTableList from './ExerciseListContainer/ExerciseTableList';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SiteOverview />
          <ExerciseListSelector onExerciseSelect={this.props.onExerciseSelect} />
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
