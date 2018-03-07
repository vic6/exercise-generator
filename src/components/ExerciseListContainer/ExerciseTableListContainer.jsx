import React, { Component } from 'react';
import ExerciseTableList from './ExerciseTableList';
import ExerciseTable from './ExerciseTable';
import Spinner from '../Spinner';

export default class ExerciseListContainer extends Component {
  state = {};

  render() {
    // const { kneeDom, hipDom, vertPull, vertPush, horPull, horPush, calf } = this.props.exerciseList;
    // const choosen = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 4);
    const ex1 = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 1)
    const ex2 = this.props.chooseRandomExercise(this.props.exerciseList, 'hipDom', 1)
    const ex3 = this.props.chooseRandomExercise(this.props.exerciseList, 'vertPull', 1)
    const ex4 = this.props.chooseRandomExercise(this.props.exerciseList, 'vertPush', 1)
    console.log('Hello whats the deal', ex1, ex2, ex3, ex4)

    return (

    <div>
      <ExerciseTableList exerciseList={exerciseList} />
      {/* <ExerciseTable
        // chooseRandomExercise={this.props.chooseRandomExercise}
        exerciseList={choosen} /> */}
    </div>
  )
  }
}
