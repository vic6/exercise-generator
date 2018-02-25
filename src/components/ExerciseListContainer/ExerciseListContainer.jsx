import React, { Component } from 'react';
import ExerciseList from './ExerciseList';

export default class ExerciseListContainer extends Component {
  render() {
    const { exerciseList } = this.props;
    return (
      <div>
        <ExerciseList exerciseList={exerciseList} />
      </div>
    );
  }
}
