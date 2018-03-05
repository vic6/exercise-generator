import React, { Component } from 'react';
import ExerciseTable from './ExerciseTable';

export default class ExerciseTableList extends Component {
  createDaysWorkout = () => {
    let exerciseDays = [];
    const { exerciseList } = this.props;
    if (Object.keys(this.props.exerciseList).length) {
      const day1 = {
        day: 1,
        kneeDom: exerciseList.kneeDom,
        hipDom: exerciseList.hipDom,
        calf: exerciseList.calf
      };
      const day2 = {
        day: 2,
        horPush: exerciseList.horPush,
        horPull: exerciseList.horPull,
        vertPush: exerciseList.vertPush,
        vertPull: exerciseList.vertPull
      };
      const day3 = {
        day: 3,
        hipDom: exerciseList.hipDom,
        kneeDom: exerciseList.kneeDom,
        calf: exerciseList.calf
      };
      const day4 = {
        day: 4,
        horPush: exerciseList.horPush,
        horPull: exerciseList.horPull,
        vertPush: exerciseList.vertPush,
        vertPull: exerciseList.vertPull
      };
      exerciseDays = [day1, day2, day3, day4];
    }
    return exerciseDays;
  };

  render() {
    const tableTitles = [null, 'Day 1 - Knee Dominant', 'Day 2 - Upper Body', 'Day 3 - Hip Dominant', 'Day 4 - Upper Body']
    const exerciseDays = this.createDaysWorkout();
    const exerciseItems = exerciseDays.map(exerciseDay => {
      console.log('DAYYYYYY', exerciseDay.day)
      return (
        <ExerciseTable
          title={tableTitles[exerciseDay.day]}
          exerciseCategory={exerciseDay}
          chooseRandomExercise={this.props.chooseRandomExercise}
          day={exerciseDay.day}
          key={exerciseDay.day}
        />
      );
    });
    return (
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">{exerciseItems}</div>
      </div>
    );
  }
}
