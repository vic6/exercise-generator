import React, { Component } from 'react';
import ExerciseTable from './ExerciseTable';

export default class ExerciseTableList extends Component {


  render() {
    const exerciseItems = this.props.exerciseList.map(exercise => (
        <ExerciseTable
          name={Object.keys(exercise)}
          exerciseList={Object.values(exercise)}
          key={Object.values(exercise)[0][0].id}
          // TODO Use uuid instead
        />
      ));

    return (
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">{exerciseItems}</div>
      </div>
    );
  }
}
