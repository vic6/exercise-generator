import React, { Component } from 'react';
import axios from 'axios';
import ExerciseList from './ExerciseList';

export default class ExerciseListContainer extends Component {
  state = { workout: [] };

  componentDidMount() {
    axios
      .all([
        axios.get(`https://wger.de/api/v2/exercise/?muscles=8&language=2&limit=50`),
        axios.get(`https://wger.de/api/v2/exercise/?muscles=10&language=2&limit=50`)
      ])
      .then(
        axios.spread((group1, group2) => {
          let exercises = group1.data.results.concat(group2.data.results);
          console.log(exercises.length);
          exercises = JSON.stringify(exercises, null, 4);
          this.setState({
            workout: exercises
          });
        })
      );
  }
  render() {
    console.log('ExerciseListContainer', this.state.workout)
    return <ExerciseList exercises={this.state.workout}/>;
  }
}
