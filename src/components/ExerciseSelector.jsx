import React, { Component } from 'react';

export default class ExerciseSelector extends Component {
  render() {
    return (
      <select onChange={this.props.onExerciseSelect}>
        <option>Select an Exercise Category</option>
        <option value="push">Push Day</option>
        <option value="pull">Pull Day</option>
      </select>
    );
  }
}
