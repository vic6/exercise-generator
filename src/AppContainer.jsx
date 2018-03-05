import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './components/Spinner'
import axios from 'axios';
import App from './components/App';

class AppContainer extends Component {
  state = {}

  componentDidMount() {
    this.onExerciseSelect();
    console.log(this.state)
  }

  onExerciseSelect = () => {
      axios
        .all([
          axios.get(`https://wger.de/api/v2/exercise/?muscles=4&language=2&limit=50`), // Chest 1
          axios.get(`https://wger.de/api/v2/exercise/?muscles=2&language=2&limit=50`), // Shoulders 2
          axios.get(`https://wger.de/api/v2/exercise/?muscles=8&language=2&limit=50`), // Knee Dom 3
          axios.get(`https://wger.de/api/v2/exercise/?muscles=10&language=2&limit=50`), // Knee Dom 4
          axios.get(`https://wger.de/api/v2/exercise/?muscles=11&language=2&limit=50`), // Hip Dom 5
          axios.get(`https://wger.de/api/v2/exercise/?muscles=12&language=2&limit=50`), // Back 6
          axios.get(`https://wger.de/api/v2/exercise/?muscles=3&language=2&limit=50`), // Back 7
          axios.get(`https://wger.de/api/v2/exercise/?muscles=9&language=2&limit=50`), // Back 8
          axios.get(`https://wger.de/api/v2/exercise/?muscles=7&language=2&limit=50`), // calf 9
          axios.get(`https://wger.de/api/v2/exercise/?muscles=15&language=2&limit=50`) // calf 10
        ])
        .then(
          axios.spread((group1, group2, group3, group4, group5, group6, group7, group8, group9, group10) => {
            const horPush = group1.data.results;
            const vertPush = group2.data.results;
            const kneeDom = [...group3.data.results, ...group4.data.results];
            const hipDom = group5.data.results;
            const vertPull = group6.data.results;
            const horPull = [...group7.data.results, ...group8.data.results];
            const calf = [...group9.data.results, ...group10.data.results];

            this.setState({
              horPush,
              vertPush,
              kneeDom,
              hipDom,
              horPull,
              vertPull,
              calf
            })
          })
        );
  };

  chooseRandomExercise = (exerciseState, numberOfExercises) => {
    console.log(exerciseState);
    if(Object.keys(exerciseState).length === 0) return null;
    // console.log('In rando', Object.keys(exerciseState))
    const exercises = [];
    while (exercises.length !== numberOfExercises) {
      const exercise = exerciseState[Math.floor(Math.random() * exerciseState.length)];
      if (!exercises.includes(exercise)) {
        exercises.push(exercise);
        console.log('added new exercise', exercise)
      } else {
        console.log(exercise, 'already in List')
      }
    }
    return exercises;
  };


  // chooseRandomExercise = (exerciseState, exerciseCategory, numberOfExercises) => {
  //   if(Object.keys(exerciseState).length === 0) return null;
  //   // console.log('In rando', Object.keys(exerciseState))
  //   const exercises = [];
  //   while (exercises.length !== numberOfExercises) {
  //     const exerciseList = exerciseState[exerciseCategory]
  //     const exercise = exerciseList[Math.floor(Math.random() * exerciseList.length)];
  //     if (!exercises.includes(exercise)) {
  //       exercises.push(exercise);
  //       console.log('added new exercise', exercise)
  //     } else {
  //       console.log(exercise, 'already in List')
  //     }
  //   }
  //   return exercises;
  // };

  // chooseRandomExercise = (exerciseGroup, numberOfExercises) => {
  //   // console.log('Exercise Group:', exerciseGroup);
  //   // console.log('Num Ex:', numberOfExercises);
  //   const ids = [];
  //   const exercises = [];
  //   while (exercises.length !== numberOfExercises) {
  //     const exercise = exerciseGroup[Math.floor(Math.random() * exerciseGroup.length)];
  //     if (!ids.includes(exercise.id)) {
  //       // console.log('New Exercise', exercise.id);
  //       // console.log(ids)
  //       // console.log('Is this id in the list?', ids.includes(exercise.id))
  //       exercises.push(exercise);
  //       ids.push(exercise.id);
  //     } else {
  //       // console.log('already in List', exercise.id)
  //     }
  //   }
  //   return exercises;
  // };

  render() {
    let exercises = this.state;
    console.log(this.state);
    console.log(exercises)
    exercises = JSON.stringify(exercises, null, 4);

    return (
        <App
          onExerciseSelect={this.onExerciseSelect}
          exerciseList={this.state.workout}
        />
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));
