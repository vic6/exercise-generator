import React, { Component } from 'react';
// import ExerciseTable from './ExerciseTable';
import ExerciseTableList from './ExerciseTableList';

export default class ExerciseTableListContainer extends Component {
  state = {};

  createDaysWorkout = () => {
    let exerciseDays = [];
    const { exerciseList } = this.props;
    console.log(this.props)
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

    return (
      <ExerciseTableList
        exerciseList={this.props.exerciseList}
        createDaysWorkout={this.createDaysWorkout}
        chooseRandomExercise={this.props.chooseRandomExercise}
      />
    );
  }
}
