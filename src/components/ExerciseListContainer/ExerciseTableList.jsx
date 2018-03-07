import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import ExerciseTable from './ExerciseTable';

export default class ExerciseTableList extends Component {
  state = {}

  blah = () => {
    this.forceUpdate();
    const exerciseList = this.props.exerciseList;
    const randomExercise = this.props.chooseRandomExercise;
    console.log('Keys length ',!Object.keys(this.state).length)
    console.log(Object.keys(this.state))
    if (true) {
      console.log('State after clear', this.state)
      console.log('EXERCISE LIST INSIDE', exerciseList)
      const exGroup = [];
      // remove day from exerciseList
      Object.keys(exerciseList)
        .slice(1)
        .forEach(key => {
          exGroup.push(key);
        });

      let exercises = [];

      switch (this.props.day) {
        case 1:
        console.log('case 1')
          exercises = [
            ...randomExercise(exerciseList[exGroup[0]], 2),
            ...randomExercise(exerciseList[exGroup[1]], 1),
            ...randomExercise(exerciseList[exGroup[2]], 1)
          ];
          break;
        case 2:
        console.log('case2')
          exercises = [
            ...randomExercise(exerciseList[exGroup[0]], 1),
            ...randomExercise(exerciseList[exGroup[1]], 1),
            ...randomExercise(exerciseList[exGroup[2]], 1),
            ...randomExercise(exerciseList[exGroup[3]], 1)
          ];
          break;
        case 3:
          exercises = [
            ...randomExercise(exerciseList[exGroup[0]], 2),
            ...randomExercise(exerciseList[exGroup[1]], 1),
            ...randomExercise(exerciseList[exGroup[2]], 1)
          ];
          break;
        case 4:
          exercises = [
            ...randomExercise(exerciseList[exGroup[0]], 1),
            ...randomExercise(exerciseList[exGroup[1]], 1),
            ...randomExercise(exerciseList[exGroup[2]], 1),
            ...randomExercise(exerciseList[exGroup[3]], 1)
          ];
          break;
        default:
          return 'Someting went wrong';
      }
      console.log('bout to set state')
      this.setState({
        ex1: exercises[0],
        ex2: exercises[1],
        ex3: exercises[2],
        ex4: exercises[3]
      });
    }
  }
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
    // this.setState({pie: ''})
    return exerciseDays;
  };

  render() {
    const tableTitles = [null, 'Day 1 - Knee Dominant', 'Day 2 - Upper Body', 'Day 3 - Hip Dominant', 'Day 4 - Upper Body']
    const exerciseDays = this.createDaysWorkout();
    const exerciseItems = exerciseDays.map(exerciseDay => {
      console.log('DAYYYYYY', exerciseDay.day)
      console.log(exerciseDay)
      return (
        <ExerciseTable
          title={tableTitles[exerciseDay.day]}
          exerciseCategory={exerciseDay}
          chooseRandomExercise={this.props.chooseRandomExercise}
          day={exerciseDay.day}
          key={exerciseDay.day}
          id={Math.floor(Math.random() * 1000)}
        />
      );
    });
    console.log('EXERCISE ITEMS', exerciseItems);
    return (
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">{exerciseItems}</div>
      </div>
    );
  }
}
