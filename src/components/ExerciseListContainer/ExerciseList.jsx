import React, { Component } from 'react';
import ExerciseListItem from './ExerciseListItem';

export default class ExerciseList extends Component {
  render() {
    // console.log('Exercise List', this.props.exerciseList);
    const exerciseItems = this.props.exerciseList.map(exercise => (
      <ExerciseListItem
        name={exercise.name}
        description={exercise.description}
        key={exercise.id}
      />
    ));
    return (
      <div>
        {exerciseItems}
      </div>
    )
  }
}
