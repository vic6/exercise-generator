import React, { Component } from 'react';
import ExerciseTable from './ExerciseListContainer/ExerciseTable';

export default class ExerciseSelector extends Component {
  render() {
    return (
      <div className='col-xs-8'>
        <select onChange={this.props.onExerciseSelect}>
          <option>Select an Exercise Category</option>
          <option value="push">Push Day</option>
          <option value="pull">Pull Day</option>
        </select>

      </div>
    );
  }
}
