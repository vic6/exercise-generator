import React, { Component } from 'react';
// import ExerciseList from './ExerciseList';
import ExerciseTableList from './ExerciseTableList';

export default class ExerciseListContainer extends Component {
  render() {
    const { exerciseList } = this.props;
    console.log('Exercise List', exerciseList)
    return (
      <div>
        <ExerciseTableList exerciseList={exerciseList} />
      </div>
    );
  }
}
