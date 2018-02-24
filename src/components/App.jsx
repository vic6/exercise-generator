import React, { Component } from 'react';
import ExerciseListSelector from './ExerciseSelector'
import ExerciseListContainer from './ExerciseListContainer/ExerciseListContainer'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <ExerciseListSelector onExerciseSelect={this.props.onExerciseSelect} />
        <ExerciseListContainer />
      </div>
    )
  }

}

export default App;
