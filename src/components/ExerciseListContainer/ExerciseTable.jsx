import React from 'react';
import { OverlayTrigger, Button } from 'react-bootstrap';

const ExerciseTable = props => (
  <div>
    {props.exercises.ex1 && (
      <table className="table table-bordered table-hover">
        <tbody>
          <tr style={{ cursor: 'pointer' }}>
            <th onClick={props.regenerateDay} className="text-center" bgcolor="#0880e2" colSpan="6">
              <font color="white">{props.title}</font>
            </th>
          </tr>

          <tr>
            <th scope="col">Exercise</th>
            <th scope="col">Sets</th>
            <th scope="col">Reps</th>
            <th scope="col">Generate new Exercise</th>
          </tr>

          <tr>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={props.getDescription(props.exercises.ex1)}>
              <td style={{ cursor: 'pointer' }}>{props.exercises.ex1.name}</td>
            </OverlayTrigger>
            <td>3</td>
            <td>8-12</td>
            <td>
              <Button id="ex1" onClick={props.changeExercise}>
                Regenerate
              </Button>
            </td>
          </tr>

          <tr>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={props.getDescription(props.exercises.ex2)}>
              <td style={{ cursor: 'pointer' }}>{props.exercises.ex2.name}</td>
            </OverlayTrigger>
            <td>3</td>
            <td>8-12</td>
            <td>
              <Button id="ex2" onClick={props.changeExercise}>
                Regenerate
              </Button>
            </td>
          </tr>

          <tr>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={props.getDescription(props.exercises.ex3)}>
              <td style={{ cursor: 'pointer' }}>{props.exercises.ex3.name}</td>
            </OverlayTrigger>
            <td>3</td>
            <td>8-12</td>
            <td>
              <Button id="ex3" onClick={props.changeExercise}>
                Regenerate
              </Button>
            </td>
          </tr>

          <tr>
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={props.getDescription(props.exercises.ex4)}>
              <td style={{ cursor: 'pointer' }}>{props.exercises.ex4.name}</td>
            </OverlayTrigger>
            <td>3</td>
            <td>8-12</td>
            <td>
              <Button id="ex4" onClick={props.changeExercise}>
                Regenerate
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    )}
  </div>
);

export default ExerciseTable;
