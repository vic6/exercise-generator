import React from 'react';
import { PageHeader } from 'react-bootstrap';

const ExerciseTemplate = () => (
  <div>
    <PageHeader style={{ marginTop: 360 }}>Four Day Workout Split Template</PageHeader>
    <div className="row">
      <div className="col-xs-6">
        <table className="table table-bordered table-hover">
          <tbody>
            <tr>
              <th className="text-center" bgcolor="#2c2f27" colSpan="6">
                <font color="white">Day 1 Lower Body</font>
              </th>
            </tr>

            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
            </tr>

            <tr>
              <td>Knee Dominant</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Hip Dominant</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Knee Dominant</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Calves</td>
              <td>3</td>
              <td>8-12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-xs-6">
        <table className="table table-bordered table-hover">
          <tbody>
            <tr>
              <th className="text-center" bgcolor="#2c2f27" colSpan="6">
                <font color="white">Day 2 Upper Body</font>
              </th>
            </tr>

            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
            </tr>

            <tr>
              <td>Horizontal Push</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Horizontal Pull</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Vertical Push</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Vertical Pull</td>
              <td>3</td>
              <td>8-12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-xs-6">
        <table className="table table-bordered table-hover">
          <tbody>
            <tr>
              <th className="text-center" bgcolor="#2c2f27" colSpan="6">
                <font color="white">Day 3 Lower Body</font>
              </th>
            </tr>

            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
            </tr>

            <tr>
              <td>Hip Dominant</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Knee Dominant</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Hip Dominant</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Calves</td>
              <td>3</td>
              <td>8-12</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-xs-6">
        <table className="table table-bordered table-hover">
          <tbody>
            <tr>
              <th className="text-center" bgcolor="#2c2f27" colSpan="6">
                <font color="white">Day 4 Upper Body</font>
              </th>
            </tr>

            <tr>
              <th scope="col">Exercise</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
            </tr>

            <tr>
              <td>Horizontal Push</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Horizontal Pull</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Vertical Push</td>
              <td>3</td>
              <td>8-12</td>
            </tr>

            <tr>
              <td>Vertical Pull</td>
              <td>3</td>
              <td>8-12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default ExerciseTemplate;
