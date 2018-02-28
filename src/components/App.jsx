import React, { Component } from 'react';
import Header from './Header'
import ExerciseListSelector from './ExerciseSelector'
import ExerciseListContainer from './ExerciseListContainer/ExerciseListContainer'
// import TestComponent from './TestComponent';

class App extends Component {
  render() {
    return (
      <div className='container'>
        {/* <TestComponent /> */}
        <Header />
        <ExerciseListSelector onExerciseSelect={this.props.onExerciseSelect} />
        <ExerciseListContainer exerciseList={this.props.exerciseList}/>
      </div>
    )
  }

}

export default App;
