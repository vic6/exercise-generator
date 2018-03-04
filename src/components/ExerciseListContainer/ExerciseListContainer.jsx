import React, { Component } from 'react';
// import ExerciseTableList from './ExerciseTableList';
import ExerciseTable from './ExerciseTable';
import Spinner from '../Spinner';

export default class ExerciseListContainer extends Component {
  state = {};

  render() {
    // const { kneeDom, hipDom, vertPull, vertPush, horPull, horPush, calf } = this.props.exerciseList;
    const choosen = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 4);
    console.log('CHOOSEN', choosen);

    return (

    <div>
      <ExerciseTable
        // chooseRandomExercise={this.props.chooseRandomExercise}
        exerciseList={choosen} />
    </div>
  )
  }
}


  /* <ExerciseTableList exerciseList={exerciseList} /> */
