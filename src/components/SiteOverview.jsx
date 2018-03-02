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
        <PageHeader>The 4 main Movement Patterns</PageHeader>

          <p className='col-xs-8'>
            Generally, we recommend compound exercises that allow you to use a lot of muscle and lift
            heavy weights for your main lifts, regardless of your level of training experience. To
            help with exercise selection, we’ll categorize the compound exercises further according to
            their movement patterns: knee dominant, hip dominant, vertical push/pull, and
            horizontal push/pull exercises. If you choose from these four, you’ll have your bases mostly
            covered.
          </p>
          <ol>
            <li>Knee Dominant</li>
            <ul>
              <li>Squat</li>
            </ul>
            <li>Hip Dominant</li>
            <li>Horizontal Push</li>
            <li>Horizontal Pull</li>
          </ol>

      </div>
    );
  }
}
