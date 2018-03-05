import React, { Component } from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';

export default class ExerciseTable extends Component {
  state = {};

  // componentDidMount() {
  //   console.log('MOUNT', this.props.exerciseList)
  //   if (this.props.exerciseList) {
  //     this.setState({
  //       ex1: this.props.chooseRandomExercise(this.props.exerciseList, 1)[0]
  //     })
  //   }
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
    this.setState(ex1, ex2, ex3, ex4);
  }

  logExercises = event => {
    const exercise = event.target.id;
    const exerciseList = this.props.exerciseCategory;
    let list = Object.keys(exerciseList);

    if (this.props.exerciseCategory) {
      console.log('Hit it');
      console.log('THIS', this);

      if (this.props.day === 1 || this.props.day === 3) {
        list.splice(2, 0, list[0]);
      }

      console.log('LIST', list);
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
          console.log('No exercises');
      }
    }
    // console.log('Ex props list', this.props.exerciseCategory)

    // if (this.props.exerciseCategory){
    //   console.log(this.props.exerciseCategory)
    // } else {
    //   console.log('Not happening Dog')
    // }
  };

  render() {
    // const names = this.props.choosen.map(exercise => (
    //   <div>{exercise.name}</div>
    // ));
    const exerciseList = this.props.exerciseCategory;
    const randomExercise = this.props.chooseRandomExercise;
    // const { exerciseCategory, randomExercise } = this.props
    console.log('Exercise List in the table Yo', exerciseList);
    console.log(this.state);
    // debugger;

    // let [ex1, ex2, ex3, ex4] = '';
    // let ex1;
    //
    // debugger;
    if (!Object.keys(this.state).length && exerciseList) {
      const exGroup = [];
      for (const [key, value] of Object.entries(exerciseList)) {
        exGroup.push(key);
      }
      let exercises = [];
      console.log('day', this.props.day);
      switch (this.props.day) {
        case 1:
          console.log('IN CASE 1');
          // debugger;
          exercises = [
            ...randomExercise(exerciseList[exGroup[0]], 2),
            ...randomExercise(exerciseList[exGroup[1]], 1),
            ...randomExercise(exerciseList[exGroup[2]], 1)
          ];

          break;
        default:
          console.log('Someting went wrong');
      }
      console.log('ex exGroup', exerciseList);
      console.log('WE setting state');
      this.setState({
        ex1: exercises[0],
        ex2: exercises[1],
        ex3: exercises[2],
        ex4: exercises[3]
      });
    }

    // const logExercises = () => {
    //   console.log('Hit it')
    //   ex1 = this.props.chooseRandomExercise(exerciseList, 1)[0];
    //   this.setState({ice: 'cream'})
    //   console.log('NEW EX', ex1);
    //
    //   if (this.props.exerciseCategory){
    //     console.log(this.props.exerciseCategory)
    //   } else {
    //     console.log('Not happening Dog')
    //   }
    // }

    // const [ex1, ex2, ex3, ex4] = this.props.exerciseList[0];
    // const clickCallback = () => this.getDescription(this.props.exerciseList);
    // const { kneeDom, hipDom, vertPull, vertPush, horPull, horPush, calf } = this.props.exerciseList;
    // const choosen = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 1)
    // const ex1 = this.props.chooseRandomExercise(this.props.exerciseList, 'kneeDom', 1)
    // const ex2 = this.props.chooseRandomExercise(this.props.exerciseList, 'hipDom', 1)
    // const ex3 = this.props.chooseRandomExercise(this.props.exerciseList, 'vertPull', 1)
    // const ex4 = this.props.chooseRandomExercise(this.props.exerciseList, 'vertPush', 1)

    return (
      <div>
        {this.state.ex1 && (
          <table className="table table-bordered table-hover">
            <tbody>
              <tr>
                <th className="text-center" bgcolor="#0880e2" colSpan="6">
                  <font color="white">{'this.props.name'}</font>
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
                  overlay={this.getDescription(this.state.ex1)}>
                  <td>{this.state.ex1.name}</td>
                </OverlayTrigger>
                <td>3</td>
                <td>8-12</td>
                <td>
                  <Button id="ex1" onClick={this.logExercises}>
                    Regenerate
                  </Button>
                </td>
              </tr>

              <tr>
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="bottom"
                  overlay={this.getDescription(this.state.ex2)}>
                  <td>{this.state.ex2.name}</td>
                </OverlayTrigger>
                <td>3</td>
                <td>8-12</td>
                <td>
                  <Button id="ex2" onClick={this.logExercises}>
                    Regenerate
                  </Button>
                </td>
              </tr>

              <tr>
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="bottom"
                  overlay={this.getDescription(this.state.ex3)}>
                  <td>{this.state.ex3.name}</td>
                </OverlayTrigger>
                <td>3</td>
                <td>8-12</td>
                <td>
                  <Button id="ex3" onClick={this.logExercises}>
                    Regenerate
                  </Button>
                </td>
              </tr>

              <tr>
                <OverlayTrigger
                  trigger="click"
                  rootClose
                  placement="bottom"
                  overlay={this.getDescription(this.state.ex4)}>
                  <td>{this.state.ex4.name}</td>
                </OverlayTrigger>
                <td>3</td>
                <td>8-12</td>
                <td>
                  <Button id="ex4" onClick={this.logExercises}>
                    Regenerate
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

// <table className="table table-bordered table-hover">
//   <tbody>
//     <tr>
//       <th className="text-center" bgcolor="#0880e2" colSpan="6">
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
//     <tr onClick={() => this.getDescription(ex1)}>
//       <OverlayTrigger
//         trigger="click"
//         rootClose
//         placement="bottom"
//         overlay={this.getDescription(ex1)}>
//         <td>{ex1.name}</td>
//       </OverlayTrigger>
//       <td>3</td>
//       <td>8-12</td>
//       <td>
//         <Button>Regenerate</Button>
//       </td>
//     </tr>
//
//     <tr onClick={() => this.getDescription(ex2)}>
//       <OverlayTrigger
//         trigger="click"
//         rootClose
//         placement="bottom"
//         overlay={this.getDescription(ex2)}>
//         <td>{ex2.name}</td>
//       </OverlayTrigger>
//       <td>3</td>
//       <td>8-12</td>
//     </tr>
//     <tr onClick={() => this.getDescription(ex3)}>
//       <OverlayTrigger
//         trigger="click"
//         rootClose
//         placement="bottom"
//         overlay={this.getDescription(ex3)}>
//         <td>{ex3.name}</td>
//       </OverlayTrigger>
//       <td>3</td>
//       <td>8-12</td>
//     </tr>
//
//     <tr onClick={() => this.getDescription(ex4)}>
//       <OverlayTrigger
//         trigger="click"
//         rootClose
//         placement="bottom"
//         overlay={this.getDescription(ex4)}>
//         <td>{ex4.name}</td>
//       </OverlayTrigger>
//       <td>3</td>
//       <td>8-12</td>
//     </tr>
//   </tbody>
// </table>
