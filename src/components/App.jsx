import React, { Component } from 'react';
import ExerciseListSelector from './ExerciseSelector'
import ExerciseListContainer from './ExerciseListContainer/ExerciseListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <ExerciseListSelector onExerciseSelect={this.props.onExerciseSelect} />
        <ExerciseListContainer exerciseList={this.props.exerciseList}/>
      </div>
    )
  }

}

export default App;
