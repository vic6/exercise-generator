import React, { Component } from 'react';
// import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import Header from './Header';
import SiteOverview from './SiteOverview';
import ExerciseListSelector from './ExerciseGenerator';
import ExerciseListContainer from './ExerciseListContainer/ExerciseListContainer';

// import TestComponent from './TestComponent';

class App extends Component {
  render() {
    return (
      <div>

      <Header />
      <div className="container">
        <SiteOverview />
        <ExerciseListSelector onExerciseSelect={this.props.onExerciseSelect} />
        <ExerciseListContainer exerciseList={this.props.exerciseList} />
      </div>
    </div>
    );
  }
}

export default App;
