import React, { Component } from 'react';
// import ExerciseTableList from './ExerciseTableList';
import ExerciseTable from './ExerciseTable';

export default class ExerciseListContainer extends Component {
  state = {}
  //
  // componentDidMount() {
  //   const choosen = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 3)
  //   console.log('CHOOSEN', choosen)
  //
  //   // const names = choosen.map(exercise => (
  //   //       <div>{exercise.name}</div>
  //   //     ));
  //   // this.setState({list: names})
  // }

  render() {
    // console.log('In exerciselist container');
    // const { kneeDom, hipDom, vertPull, vertPush, horPull, horPush, calf } = this.props.exerciseList;
    const choosen = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 3)
    setTimeout(function() {
      console.log('wating and stuff')
      console.log('CHOOSEN', choosen)
    },5000);
    // const names = choosen.map(exercise => (
    //       <div>{exercise.name}</div>
    //     ));

    return (
      'blah'
      // <div>
      //   <ExerciseTable
      //     // chooseRandomExercise={this.props.chooseRandomExercise}
      //     exerciseList={names} />
      // </div>
    );
  }
}

{/* <ExerciseTableList exerciseList={exerciseList} /> */}
