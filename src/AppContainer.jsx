import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App';

class AppContainer extends Component {
  state = { workout: [] };

  componentDidMount() {
    axios.get(`https://wger.de/api/v2/exercise/`).then(res => {
      let workout = res.data.results.filter(exercise => exercise.category === 10);
      // workout = workout.map(exercise => <div>{exercise.description}</div>);
      workout = JSON.stringify(workout, null, 4);
      this.setState({
        workout
      });
    });
  }
  render() {
    return (
      <div>
        <pre>{this.state.workout}</pre>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<AppContainer />, document.getElementById('app'));
