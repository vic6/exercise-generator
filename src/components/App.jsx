import React, { Component } from 'react';
// import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import Header from './Header';
import SiteOverview from './SiteOverview';
import ExerciseListSelector from './ExerciseGenerator';
import ExerciseTable from './ExerciseListContainer/ExerciseTable';
import ExerciseTableList from './ExerciseListContainer/ExerciseTableList';
// import ExerciseListContainer from './ExerciseListContainer/ExerciseListContainer';

// import TestComponent from './TestComponent';

class App extends Component {

  // componentDidMount() {
  //   const result = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 2);
  // }

  render() {
    // console.log('loop')

    // const state = this.props.exerciseList;
    // const random = this.props.chooseRandomExercise
    // const result = this.props.chooseRandomExercise(this.props.exerciseList.knee, 1);
    const exerciseList = this.props.exerciseList
    let day1;

    if (Object.keys(exerciseList).length) {
      day1 = {
        kneeDom: exerciseList.kneeDom,
        hipDom: exerciseList.hipDom,
        calf: exerciseList.calf
      }
    }


    // const exercises = [...exerciseList.kneeDom, ...exerciseList.hipDom, ...exerciseList.calf]
    // console.log('EXERCISES', day1)

    // console.log(result);
    // console.log(random(state, 'kneeDom', 2));
    return (
      <div>
        {/* {exercises && <div>{exercises.length}</div>} */}
      <Header />
      <div className="container">
        <SiteOverview />
        <ExerciseListSelector onExerciseSelect={this.props.onExerciseSelect} />
        <ExerciseTableList
          exerciseList={this.props.exerciseList}
          chooseRandomExercise={this.props.chooseRandomExercise}
        />

        {/* <ExerciseTable
          exerciseCategory={day1}
          chooseRandomExercise={this.props.chooseRandomExercise}
          day={1}
        /> */}
        {/* <ExerciseListContainer
          exerciseList={this.props.exerciseList}
          chooseRandomExercise={this.props.chooseRandomExercise}
        /> */}
      </div>
    </div>
    );
  }
}

export default App;
