import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App';

class AppContainer extends Component {
  state = { workout: [] };

  onExerciseSelect = event => {
    if (event.target.value === 'pull') {
      axios
        .all([
          axios.get(`https://wger.de/api/v2/exercise/?muscles=4&language=2&limit=50`), // Chest
          axios.get(`https://wger.de/api/v2/exercise/?muscles=2&language=2&limit=50`), // Shoulders
          axios.get(`https://wger.de/api/v2/exercise/?muscles=8&language=2&limit=50`), // Knee Dom
          axios.get(`https://wger.de/api/v2/exercise/?muscles=11&language=2&limit=50`), // Knee Dom
          axios.get(`https://wger.de/api/v2/exercise/?muscles=10&language=2&limit=50`), // Hip Dom
          axios.get(`https://wger.de/api/v2/exercise/?muscles=12&language=2&limit=50`), // Back
          axios.get(`https://wger.de/api/v2/exercise/?muscles=3&language=2&limit=50`), // Back
          axios.get(`https://wger.de/api/v2/exercise/?muscles=9&language=2&limit=50`), // Back
          axios.get(`https://wger.de/api/v2/exercise/?muscles=7&language=2&limit=50`), // calf
          axios.get(`https://wger.de/api/v2/exercise/?muscles=15&language=2&limit=50`) // calf
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
            // pullExercises = JSON.stringify(pullExercises, null, 4);
            const day1 = [
              ...this.chooseRandomExercise(kneeDom, 2),
              ...this.chooseRandomExercise(hipDom, 1),
              ...this.chooseRandomExercise(calf, 1)
            ];
            const day2 = [
              ...this.chooseRandomExercise(horPush, 1),
              ...this.chooseRandomExercise(horPull, 1),
              ...this.chooseRandomExercise(vertPush, 1),
              ...this.chooseRandomExercise(vertPull, 1)
            ];
            const day3 = [
              ...this.chooseRandomExercise(kneeDom, 1),
              ...this.chooseRandomExercise(hipDom, 2),
              ...this.chooseRandomExercise(calf, 1)
            ];
            const day4 = [
              ...this.chooseRandomExercise(horPush, 1),
              ...this.chooseRandomExercise(horPull, 1),
              ...this.chooseRandomExercise(vertPush, 1),
              ...this.chooseRandomExercise(vertPull, 1)
            ];
            this.setState({
              workout: [{day1: day1}, {day2: day2}, {day3: day3}, {day4: day4}]
            });
          })
        );
    }
  };

  chooseRandomExercise = (exerciseGroup, numberOfExercises) => {
    // console.log('Exercise Group:', exerciseGroup);
    // console.log('Num Ex:', numberOfExercises);
    const ids = [];
    const exercises = [];
    while (exercises.length !== numberOfExercises) {
      const exercise = exerciseGroup[Math.floor(Math.random() * exerciseGroup.length)];
      if (!ids.includes(exercise.id)) {
        // console.log('New Exercise', exercise.id);
        // console.log(ids)
        // console.log('Is this id in the list?', ids.includes(exercise.id))
        exercises.push(exercise);
        ids.push(exercise.id);
      } else {
        // console.log('already in List', exercise.id)
      }
    }
    return exercises;
  };

  render() {
    return (
        <App
          onExerciseSelect={this.onExerciseSelect}
          exerciseList={this.state.workout}
        />
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));
