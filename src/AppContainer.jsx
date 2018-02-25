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
          axios.get(`https://wger.de/api/v2/exercise/?muscles=12&language=2&limit=50`), // Back
          axios.get(`https://wger.de/api/v2/exercise/?muscles=3&language=2&limit=50`), // Back
          axios.get(`https://wger.de/api/v2/exercise/?muscles=9&language=2&limit=50`), // Back
          axios.get(`https://wger.de/api/v2/exercise/?muscles=11&language=2&limit=50`), // Legs
          axios.get(`https://wger.de/api/v2/exercise/?muscles=14&language=2&limit=50`), // Abs
          axios.get(`https://wger.de/api/v2/exercise/?muscles=6&language=2&limit=50`) // Abs
        ])
        .then(
          axios.spread((group1, group2, group3, group4, group5, group6) => {
            const backGroup = [
              ...group1.data.results,
              ...group2.data.results,
              ...group3.data.results
            ];
            const legGroup = group4.data.results;
            const absGroup = [...group5.data.results, ...group6.data.results];
            const pullExercises = [
              ...this.chooseRandomExercise(backGroup, 2),
              ...this.chooseRandomExercise(legGroup, 2),
              ...this.chooseRandomExercise(absGroup, 1)
            ];
            // pullExercises = JSON.stringify(pullExercises, null, 4);
            this.setState({
              workout: pullExercises
            });
          })
        );
    } else if (event.target.value === 'push') {
      axios
        .all([
          axios.get(`https://wger.de/api/v2/exercise/?muscles=4&language=2&limit=50`), // Chest
          axios.get(`https://wger.de/api/v2/exercise/?muscles=2&language=2&limit=50`), // Shoulders
          axios.get(`https://wger.de/api/v2/exercise/?muscles=8&language=2&limit=50`), // Legs
          axios.get(`https://wger.de/api/v2/exercise/?muscles=10&language=2&limit=50`), // Legs
          axios.get(`https://wger.de/api/v2/exercise/?muscles=14&language=2&limit=50`), // Abs
          axios.get(`https://wger.de/api/v2/exercise/?muscles=6&language=2&limit=50`) // Abs
        ])
        .then(
          axios.spread((group1, group2, group3, group4, group5, group6) => {
            const chestGroup = group1.data.results;
            const shoulderGroup = group2.data.results;
            const legGroup = [...group3.data.results, ...group4.data.results];
            const absGroup = [...group5.data.results, ...group6.data.results];
            const pushExercises = [
              ...this.chooseRandomExercise(chestGroup, 1),
              ...this.chooseRandomExercise(shoulderGroup, 1),
              ...this.chooseRandomExercise(legGroup, 2),
              ...this.chooseRandomExercise(absGroup, 1)
            ];
            // pushExercises = JSON.stringify(pushExercises, null, 4);
            this.setState({
              workout: pushExercises
            });
          })
        );
    }
  };

  chooseRandomExercise = (exerciseGroup, numberOfExercises) => {
    console.log('Exercise Group:', exerciseGroup);
    console.log('Num Ex:', numberOfExercises);
    let ids = [];
    const exercises = [];
    while (exercises.length !== numberOfExercises) {
      const exercise = exerciseGroup[Math.floor(Math.random() * exerciseGroup.length)];
      if (!ids.includes(exercise.id)) {
        console.log('New Exercise', exercise.id);
        console.log(ids)
        console.log('Is this id in the list?', ids.includes(exercise.id))
        exercises.push(exercise);
        ids.push(exercise.id);
      } else {
        console.log('already in List', exercise.id)
      }
    }
    return exercises;
  };

  // chooseRandomExercise = (exerciseGroup, numberOfExercises) => {
  //   console.log('Out of the Loop')
  //   console.log('Number of Ex', numberOfExercises);
  //   var count = 0;
  //   while (count < numberOfExercises) {
  //     console.log('In the loop');
  //     console.log(count);
  //     count += 1;
  //   }
  //   return 'Done';
  // };

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
