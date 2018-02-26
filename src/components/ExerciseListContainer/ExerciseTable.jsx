import React, { Component } from 'react';

export default class ExerciseTable extends Component {

  onClick = (event) => {
    console.log(event)
  }

  render() {
    return (
      <div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th bgcolor="blue" text-align="center" colSpan="6">
                <font color="white">Day 1 - Lower Body</font>
              </th>
            </tr>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
              <th scope="col">Rep Total</th>
              <th scope="col">RPE</th>
            </tr>

            <tr>
              <td onClick={this.onClick}>Knee Dominant</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Hip Dominant</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Unilateral Knee Dominant</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Calf Exercise</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-bordered">
          <tbody>
            <tr>
              <th bgcolor="blue" text-align="center" colSpan="6">
                <font color="white">Day 2 - Upper Body</font>
              </th>
            </tr>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
              <th scope="col">Rep Total</th>
              <th scope="col">RPE</th>
            </tr>

            <tr>
              <td>Horizontal Push</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Horizontal Pull</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Vertical Push</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Vertical Pull</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-bordered">
          <tbody>
            <tr>
              <th bgcolor="blue" text-align="center" colSpan="6">
                <font color="white">Day 3 - Lower Body</font>
              </th>
            </tr>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
              <th scope="col">Rep Total</th>
              <th scope="col">RPE</th>
            </tr>

            <tr>
              <td>Knee Dominant</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Hip Dominant</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Unilateral Hip Dominant</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Calf Exercise</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
          </tbody>
        </table>

        <table className="table table-bordered">
          <tbody>
            <tr>
              <th bgcolor="blue" text-align="center" colSpan="6">
                <font color="white">Day 4 - Upper Body</font>
              </th>
            </tr>
            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
              <th scope="col">Rep Total</th>
              <th scope="col">RPE</th>
            </tr>

            <tr>
              <td>Horizontal Push</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Horizontal Pull</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Vertical Push</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
            <tr>
              <td>Vertical Pull</td>
              <td>3</td>
              <td>8</td>
              <td>24</td>
              <td>8 to 9</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}