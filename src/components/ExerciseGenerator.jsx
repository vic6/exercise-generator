import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import ExerciseTable from './ExerciseListContainer/ExerciseTable';

export default class ExerciseGenerator extends Component {
  render() {
    return (
      <div className="col-xs-12">
        <div className="col">
          <Button onClick={this.props.onExerciseSelect} className="btn btn-primary">
            Generate Workout
          </Button>
        </div>
      </div>
    );
  }
}