import React, { Component } from 'react';
// import ExerciseTableList from './ExerciseTableList';
import ExerciseTable from './ExerciseTable';

export default class ExerciseListContainer extends Component {
  render() {
    console.log('In exerciselist container');
    const { exerciseList } = this.props;
    console.log('Exercise List', exerciseList)
    return (
      <div>
        <ExerciseTable exerciseList={this.props.exerciseList} />
        {/* <ExerciseTableList exerciseList={exerciseList} /> */}
      </div>
    );
  }
}
