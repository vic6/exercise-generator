import React, { Component } from 'react';
import Header from './Header'
import ExerciseListSelector from './ExerciseSelector'
import ExerciseListContainer from './ExerciseListContainer/ExerciseListContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExerciseListSelector onExerciseSelect={this.props.onExerciseSelect} />
        <ExerciseListContainer exerciseList={this.props.exerciseList}/>
      </div>
    )
  }

}

export default App;
