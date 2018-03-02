import React, { Component } from 'react';
import { Jumbotron, Button, PageHeader } from 'react-bootstrap';

export default class SiteOverview extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Ex-Gen</h1>
          <p>
            This simplie exercise utility generates randomized exercises based on the bodys planes
            of movement.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <PageHeader className="text-center">The 6 main Movement Patterns</PageHeader>

          <p className='col-xs-12'>
            Generally, we recommend compound exercises that allow you to use a lot of muscle and lift
            heavy weights for your main lifts, regardless of your level of training experience. To
            help with exercise selection, we’ll categorize the compound exercises further according to
            their movement patterns: knee dominant, hip dominant, vertical push/pull, and
            horizontal push/pull exercises. If you choose from these four, you’ll have your bases mostly
            covered.
          </p>
          <ol className='col-offset-4'>
            <li>Knee Dominant
              <ul>
                <li>Squat</li>
                <li>Leg extentions</li>
              </ul>
            </li>
            <li>Hip Dominant
              <ul>
                <li>Romanian Deadlift</li>
                <li>Laying Leg curl</li>
              </ul>
            </li>
            <li>Horizontal Push
              <ul>
                <li>Barbell Bench Press</li>
                <li>Push ups</li>
              </ul>
            </li>
            <li>Horizontal Pull
              <ul>
                <li>Seated Row</li>
                <li>Dumbell Row</li>
              </ul>
            </li>
            <li>Vertical Push
              <ul>
                <li>Shoulder Press</li>
                <li>Lateral Raise</li>
              </ul>
            </li>
            <li>Vertical Pull
              <ul>
                <li>Pullups</li>
                <li>Seated Lat Pull</li>
              </ul>
            </li>
          </ol>

      </div>
    );
  }
}
