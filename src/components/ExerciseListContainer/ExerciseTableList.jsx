import React, { Component } from 'react';
import ExerciseTable from './ExerciseTable';

export default class ExerciseTableList extends Component {
  render() {
    console.log('Exercise Table List props', this.props);
    debugger;
    // const exerciseSplit = ['Day 1 - Lower Body', 'Day 2 - Upper Body', 'Day 3 - Lower Body', 'Day 4 - Upper Body'];
    // const exerciseItems = this.props.exerciseList.map(exercise => {
    //   console.log(exercise)
    //   <ExerciseTable
    //     // exerciseSplit={exerciseSplit}
    //     // exerciseList={exercise}
    //     // description={exercise.description}
    //     // key={exercise.id}
    //   />
    // });
    return (
      <div className='col-xs-10'>
        blah
        {/* {exerciseItems} */}
      </div>
    )
  }
}
