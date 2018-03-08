import React, { Component } from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
import ExerciseTable from './ExerciseTable';

export default class ExerciseTableContainer extends Component {
  state = {};

  componentDidMount() {
    this.regenerateDay();
  }

  getDescription = exercise => (
    <Popover id="popover-trigger-click-root-close" title="Description">
      <p dangerouslySetInnerHTML={{ __html: exercise.description }} />
    </Popover>
  );

  changeExercise = event => {
    const exercise = event.target.id;
    const exerciseList = this.props.exerciseCategory;
    const list = Object.keys(exerciseList).slice(1);

    if (this.props.exerciseCategory) {
      // pick two exercises for knee and hip dom days
      if (this.props.day === 1 || this.props.day === 3) {
        list.splice(2, 0, list[0]);
      }
      switch (exercise) {
        case 'ex1':
          this.setState({
            ex1: this.props.chooseRandomExercise(exerciseList[list[0]], 1)[0]
          });
          break;
        case 'ex2':
          this.setState({
            ex2: this.props.chooseRandomExercise(exerciseList[list[1]], 1)[0]
          });
          break;
        case 'ex3':
          this.setState({
            ex3: this.props.chooseRandomExercise(exerciseList[list[2]], 1)[0]
          });
          break;
        case 'ex4':
          this.setState({
            ex4: this.props.chooseRandomExercise(exerciseList[list[3]], 1)[0]
          });
          break;
        default:
          return 'No exercises';
      }
    }
  };

  regenerateDay = () => {
    const exerciseList = this.props.exerciseCategory;
    const randomExercise = this.props.chooseRandomExercise;
    if (exerciseList) {
      const exGroup = [];
      // remove day from exerciseList
      Object.keys(exerciseList)
        .slice(1)
        .forEach(key => exGroup.push(key));

      let exercises = [];

      switch (this.props.day) {
        case 1:
          exercises = [
            ...randomExercise(exerciseList[exGroup[0]], 2),
            ...randomExercise(exerciseList[exGroup[1]], 1),
            ...randomExercise(exerciseList[exGroup[2]], 1)
          ];
          break;
        case 2:
          exercises = [
            ...randomExercise(exerciseList[exGroup[0]], 1),
            ...randomExercise(exerciseList[exGroup[1]], 1),
            ...randomExercise(exerciseList[exGroup[2]], 1),
            ...randomExercise(exerciseList[exGroup[3]], 1)
          ];
          break;
        case 3:
          exercises = [
            ...randomExercise(exerciseList[exGroup[0]], 2),
            ...randomExercise(exerciseList[exGroup[1]], 1),
            ...randomExercise(exerciseList[exGroup[2]], 1)
          ];
          break;
        case 4:
          exercises = [
            ...randomExercise(exerciseList[exGroup[0]], 1),
            ...randomExercise(exerciseList[exGroup[1]], 1),
            ...randomExercise(exerciseList[exGroup[2]], 1),
            ...randomExercise(exerciseList[exGroup[3]], 1)
          ];
          break;
        default:
          return 'Someting went wrong';
      }
      this.setState({
        ex1: exercises[0],
        ex2: exercises[1],
        ex3: exercises[2],
        ex4: exercises[3]
      });
    }
  };

  render() {
    return (
      <ExerciseTable
        exercises={this.state}
        regenerateDay={this.regenerateDay}
        title={this.props.title}
        getDescription={this.getDescription}
        changeExercise={this.changeExercise}
      />
      // <div>
      //   {this.state.ex1 && (
      //     <table className="table table-bordered table-hover">
      //       <tbody>
      //         <tr style={{ cursor: 'pointer' }}>
      //           <th
      //             onClick={this.regenerateDay}
      //             className="text-center"
      //             bgcolor="#0880e2"
      //             colSpan="6">
      //             <font color="white">{this.props.title}</font>
      //           </th>
      //         </tr>
      //
      //         <tr>
      //           <th scope="col">Exercise</th>
      //           <th scope="col">Sets</th>
      //           <th scope="col">Reps</th>
      //           <th scope="col">Generate new Exercise</th>
      //         </tr>
      //
      //         <tr>
      //           <OverlayTrigger
      //             trigger="click"
      //             rootClose
      //             placement="bottom"
      //             overlay={this.getDescription(this.state.ex1)}>
      //             <td style={{ cursor: 'pointer' }}>{this.state.ex1.name}</td>
      //           </OverlayTrigger>
      //           <td>3</td>
      //           <td>8-12</td>
      //           <td>
      //             <Button id="ex1" onClick={this.changeExercise}>
      //               Regenerate
      //             </Button>
      //           </td>
      //         </tr>
      //
      //         <tr>
      //           <OverlayTrigger
      //             trigger="click"
      //             rootClose
      //             placement="bottom"
      //             overlay={this.getDescription(this.state.ex2)}>
      //             <td style={{ cursor: 'pointer' }}>{this.state.ex2.name}</td>
      //           </OverlayTrigger>
      //           <td>3</td>
      //           <td>8-12</td>
      //           <td>
      //             <Button id="ex2" onClick={this.changeExercise}>
      //               Regenerate
      //             </Button>
      //           </td>
      //         </tr>
      //
      //         <tr>
      //           <OverlayTrigger
      //             trigger="click"
      //             rootClose
      //             placement="bottom"
      //             overlay={this.getDescription(this.state.ex3)}>
      //             <td style={{ cursor: 'pointer' }}>{this.state.ex3.name}</td>
      //           </OverlayTrigger>
      //           <td>3</td>
      //           <td>8-12</td>
      //           <td>
      //             <Button id="ex3" onClick={this.changeExercise}>
      //               Regenerate
      //             </Button>
      //           </td>
      //         </tr>
      //
      //         <tr>
      //           <OverlayTrigger
      //             trigger="click"
      //             rootClose
      //             placement="bottom"
      //             overlay={this.getDescription(this.state.ex4)}>
      //             <td style={{ cursor: 'pointer' }}>{this.state.ex4.name}</td>
      //           </OverlayTrigger>
      //           <td>3</td>
      //           <td>8-12</td>
      //           <td>
      //             <Button id="ex4" onClick={this.changeExercise}>
      //               Regenerate
      //             </Button>
      //           </td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   )}
      // </div>
    );
  }
}
