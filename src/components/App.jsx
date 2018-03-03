import React, { Component } from 'react';
// import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import Header from './Header';
import SiteOverview from './SiteOverview';
import ExerciseListSelector from './ExerciseGenerator';
import ExerciseListContainer from './ExerciseListContainer/ExerciseListContainer';

// import TestComponent from './TestComponent';

class App extends Component {

  // chooseRandomExercise = (exerciseCategory, numberOfExercises) => {
  //   const exercises = [];
  //   while (exercises.length !== numberOfExercises) {
  //     const exerciseList = this.props.exerciseList[exerciseCategory]
  //     const exercise = exerciseList[Math.floor(Math.random() * exerciseList.length)];
  //     if (!exercises.includes(exercise)) {
  //       exercises.push(exercise);
  //       console.log('added new exercise', exercise)
  //     } else {
  //       console.log(exercise, 'already in List')
  //     }
  //   }
  //   return exercises;
  // };


  render() {
    const stuff = this.props.exerciseList
    // const keys = Object.keys(stuff);
    // console.log(why('kneeDom', 2));

    return (
      <div>
        {'Hi dude'}
      <Header />
      {/* <div className="container">
        <SiteOverview />
        <ExerciseListSelector onExerciseSelect={this.props.onExerciseSelect} />
        <ExerciseListContainer exerciseList={this.props.exerciseList} />
      </div> */}
    </div>
    );
  }
}

export default App;
