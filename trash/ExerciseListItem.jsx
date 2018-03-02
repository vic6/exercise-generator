import React, { Component } from 'react';

export default class ExerciseListItem extends Component {
  // write this class to take props from container
  render() {
    const exercise = this.props;
    return (
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{exercise.name}</h5>
          {/* <p className="card-text">{exercise.description}</p> */}
          <p className="card-text" dangerouslySetInnerHTML={{__html: exercise.description}} />
        </div>
      </div>
    );
  }
}
