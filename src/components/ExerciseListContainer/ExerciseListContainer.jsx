import React, { Component } from 'react';
// import ExerciseTableList from './ExerciseTableList';
import ExerciseTable from './ExerciseTable';

export default class ExerciseListContainer extends Component {
  render() {
    console.log('In exerciselist container');
    // const { kneeDom, hipDom, vertPull, vertPush, horPull, horPush, calf } = this.props.exerciseList;
    // const choosen = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 3)
    console.log('Exercise choosen')
    return (
      <div>
        <ExerciseTable
          exerciseList={this.props.exerciseList} />
        {/* <ExerciseTableList exerciseList={exerciseList} /> */}
      </div>
    );
  }
}
