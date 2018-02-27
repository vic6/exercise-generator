import React, { Component } from 'react';
import ExerciseTable from './ExerciseTable';

export default class ExerciseTableList extends Component {
  render() {
    console.log('Exercise Table List props', this.props);

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
    const exerciseItems = this.props.exerciseList.map(exercise => {
      console.log(exercise)
      console.log('EXERCISE ID', exercise.id)
       return <ExerciseTable
        name={Object.keys(exercise)}
        exerciseList={Object.values(exercise)}
        // TODO Use uuid instead
        key={Object.values(exercise)[0][0].id}
      />
    })
    return (
      <div className='row'>
        <div className='col-xs-8 col-xs-offset-2'>
          {exerciseItems}
        </div>
      </div>
    )
  }
}
