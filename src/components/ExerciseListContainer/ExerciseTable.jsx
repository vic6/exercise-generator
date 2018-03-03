import React, { Component } from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

export default class ExerciseTable extends Component {
  // componentDidMount() {
  //   this.pickExercises();
  // }

  getDescription = exercise => (
    <Popover id="popover-trigger-click-root-close" title="Description">
      <p dangerouslySetInnerHTML={{ __html: exercise.description }} />
    </Popover>
  );

  pickExercises() {
    const ex1 = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 1);
    const ex2 = this.props.chooseRandomExercise(this.props.exerciseList, 'hipDom', 1);
    const ex3 = this.props.chooseRandomExercise(this.props.exerciseList, 'vertPull', 1);
    const ex4 = this.props.chooseRandomExercise(this.props.exerciseList, 'vertPush', 1);
    console.log('I hate this', ex1, ex2, ex3, ex4);
    this.setState(ex1, ex2, ex3, ex4);
  }

  render() {
    // const names = this.props.choosen.map(exercise => (
    //   <div>{exercise.name}</div>
    // ));
    const names = this.props.names
    // const [ex1, ex2, ex3, ex4] = this.props.exerciseList[0];
    // const clickCallback = () => this.getDescription(this.props.exerciseList);
    // const { kneeDom, hipDom, vertPull, vertPush, horPull, horPush, calf } = this.props.exerciseList;
    // const choosen = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 1)
    // const ex1 = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 1)
    // const ex2 = this.props.chooseRandomExercise(this.props.exerciseList, 'hipDom', 1)
    // const ex3 = this.props.chooseRandomExercise(this.props.exerciseList, 'vertPull', 1)
    // const ex4 = this.props.chooseRandomExercise(this.props.exerciseList, 'vertPush', 1)

    return (
      {names}
    )

    // <table className="table table-bordered table-hover">
    //   <tbody>
    //     <tr>
    //       <th className='text-center' bgcolor="#0880e2" colSpan="6">
    //         <font color="white">{'this.props.name'}</font>
    //       </th>
    //     </tr>
    //
    //     <tr>
    //       <th scope="col">Exercise</th>
    //       <th scope="col">Sets</th>
    //       <th scope="col">Reps</th>
    //       <th scope="col">Generate new Exercise</th>
    //     </tr>
    //
    //     <tr onClick={() => this.getDescription(ex1[0])}>
    //       <OverlayTrigger
    //         trigger="click"
    //         rootClose
    //         placement="bottom"
    //         overlay={this.getDescription(ex1[0])}>
    //         <td>{'ex1.name'}</td>
    //       </OverlayTrigger>
    //       <td>3</td>
    //       <td>8-12</td>
    //       <td><Button>Regenerate</Button></td>
    //     </tr>
    //
    //     <tr onClick={() => this.getDescription(ex2[0])}>
    //       <OverlayTrigger
    //         trigger="click"
    //         rootClose
    //         placement="bottom"
    //         overlay={this.getDescription(ex2[0])}>
    //         <td>{'ex2.name'}</td>
    //       </OverlayTrigger>
    //       <td>3</td>
    //       <td>8-12</td>
    //     </tr>
    //     <tr onClick={() => this.getDescription(ex3[0])}>
    //       <OverlayTrigger
    //         trigger="click"
    //         rootClose
    //         placement="bottom"
    //         overlay={this.getDescription(ex3[0])}>
    //         <td>{'ex3.name'}</td>
    //       </OverlayTrigger>
    //       <td>3</td>
    //       <td>8-12</td>
    //     </tr>
    //
    //     <tr onClick={() => this.getDescription(ex4[0])}>
    //       <OverlayTrigger
    //         trigger="click"
    //         rootClose
    //         placement="bottom"
    //         overlay={this.getDescription(ex4[0])}>
    //         <td>{'ex4.name'}</td>
    //       </OverlayTrigger>
    //       <td>3</td>
    //       <td>8-12</td>
    //     </tr>
    //   </tbody>
    // </table>
  }
}
