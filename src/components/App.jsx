import React, { Component } from 'react';
// import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import Header from './Header';
import SiteOverview from './SiteOverview';
import ExerciseListSelector from './ExerciseGenerator';
import ExerciseListContainer from './ExerciseListContainer/ExerciseListContainer';

// import TestComponent from './TestComponent';

class App extends Component {

  // componentDidMount() {
  //   const result = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 2);
  // }

  render() {
    // console.log('loop')

    const state = this.props.exerciseList;
    const random = this.props.chooseRandomExercise
    const result = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 2);
    // console.log(result);
    // console.log(random(state, 'kneeDom', 2));
    return (
      <div>
        {result && <div>{result.length}</div>}
      <Header />
      <div className="container">
        <SiteOverview />
        <ExerciseListSelector onExerciseSelect={this.props.onExerciseSelect} />
        <ExerciseListContainer
          exerciseList={this.props.exerciseList}
          chooseRandomExercise={this.props.chooseRandomExercise}
        />
      </div>
    </div>
    );
  }
}

export default App;
