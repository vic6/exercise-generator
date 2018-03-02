import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

export default class ExerciseTable extends Component {
  getDescription = exercise => (
    <Popover id="popover-trigger-click-root-close" title="Description">
      <p dangerouslySetInnerHTML={{ __html: exercise.description }} />
    </Popover>
  );

  render() {
    const [ex1, ex2, ex3, ex4] = this.props.exerciseList[0];
    // const clickCallback = () => this.getDescription(this.props.exerciseList);

    return (
      <table className="table table-bordered table-hover">
        <tbody>
          <tr>
            <th className='text-center' bgcolor="#0880e2" colSpan="6">
              <font color="white">{this.props.name}</font>
            </th>
          </tr>

          <tr>
            <th scope="col">Exercise</th>
            <th scope="col">Sets</th>
            <th scope="col">Reps</th>
          </tr>

          <tr onClick={() => this.getDescription(ex1)}>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={this.getDescription(ex1)}>
              <td>{ex1.name}</td>
            </OverlayTrigger>
            <td>3</td>
            <td>8-12</td>
          </tr>

          <tr onClick={() => this.getDescription(ex2)}>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={this.getDescription(ex2)}>
              <td>{ex2.name}</td>
            </OverlayTrigger>
            <td>3</td>
            <td>8-12</td>
          </tr>
          <tr onClick={() => this.getDescription(ex3)}>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={this.getDescription(ex3)}>
              <td>{ex3.name}</td>
            </OverlayTrigger>
            <td>3</td>
            <td>8-12</td>
          </tr>

          <tr onClick={() => this.getDescription(ex4)}>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={this.getDescription(ex4)}>
              <td>{ex4.name}</td>
            </OverlayTrigger>
            <td>3</td>
            <td>8-12</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
