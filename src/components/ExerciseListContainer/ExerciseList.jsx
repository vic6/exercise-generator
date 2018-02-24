import React, {Component} from 'react';

export default class ExerciseList extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        HELLO
        <pre>{this.props.exercises}</pre>
      </div>
    )
  }
}
