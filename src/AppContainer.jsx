import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App';

class AppContainer extends Component {
  // state = { workout: [] };
  //
  // componentDidMount() {
  //   axios.all([
  // 
  //     axios.get(`https://wger.de/api/v2/exercise/?muscles=8&language=2&limit=50`),
  //     axios.get(`https://wger.de/api/v2/exercise/?muscles=10&language=2&limit=50`)
  //   ])
  //   .then(axios.spread((group1, group2) => {
  //     let exercises = group1.data.results.concat(group2.data.results);;
  //     console.log(exercises.length);
  //     exercises = JSON.stringify(exercises, null, 4)
  //     this.setState({
  //       workout: exercises
  //     })
  //   }))
  //
  //
  //   //   res => {
  //   //   // let kneeDom = res.data.results.filter(exercise => exercise.muscles.includes(11));
  //   //   // workout = workout.map(exercise => <div>{exercise.description}</div>);
  //   //   let kneeDom = res.data;
  //   //   const count = res.data.results;
  //   //   kneeDom = JSON.stringify(kneeDom, null, 4);
  //   //
  //   //   this.setState({
  //   //     workout: kneeDom
  //   //   });
  //   //   console.log(count);
  //   // });
  // }

  onExerciseSelect = event => {
    console.log('Event:', event);
    console.log('value:', event.target.value);

    event.target.value === 'pull'
      ? axios.get(`https://wger.de/api/v2/exercise/?muscles=3&language=2&limit=50`).then(res => {
          // let kneeDom = res.data.results.filter(exercise => exercise.muscles.includes(11));
          // workout = workout.map(exercise => <div>{exercise.description}</div>);
          let kneeDom = res.data;
          const count = res.data.results;
          kneeDom = JSON.stringify(kneeDom, null, 4);

          this.setState({
            workout: kneeDom
          });
          console.log(count);
        })
      : axios.get(`https://wger.de/api/v2/exercise/?muscles=8&language=2&limit=50`).then(res => {
          // let kneeDom = res.data.results.filter(exercise => exercise.muscles.includes(11));
          // workout = workout.map(exercise => <div>{exercise.description}</div>);
          let kneeDom = res.data;
          kneeDom = JSON.stringify(kneeDom, null, 4);
          this.setState({
            workout: kneeDom
          });
        });
  };

  render() {
    return (
      <div>
        <App onExerciseSelect={this.onExerciseSelect} />
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));
