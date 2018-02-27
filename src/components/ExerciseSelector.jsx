import React, { Component } from 'react';
// import ExerciseTable from './ExerciseListContainer/ExerciseTable';

export default class ExerciseSelector extends Component {
  render() {
    return (
      <div className="row align-items-center justify-content-center">
        {/* <select onChange={this.props.onExerciseSelect}>
          <option>Generate workout</option>
          <option value="generate">Generate</option>
        </select> */}
        <div className="col">
          <button onClick={this.props.onExerciseSelect} className="btn btn-primary" type="button">
            Generate Workout
          </button>
        </div>
      </div>
    );
  }
}
