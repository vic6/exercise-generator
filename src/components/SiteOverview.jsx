import React, { Component } from 'react';
import { Jumbotron, Button, PageHeader, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

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
        <PageHeader className="text-center">The 6 Primary Movement Patterns</PageHeader>

        {/* <p className='col-xs-12'>
            Generally, we recommend compound exercises that allow you to use a lot of muscle and lift
            heavy weights for your main lifts, regardless of your level of training experience. To
            help with exercise selection, we’ll categorize the compound exercises further according to
            their movement patterns: knee dominant, hip dominant, vertical push/pull, and
            horizontal push/pull exercises. If you choose from these four, you’ll have your bases mostly
            covered.
          </p> */}
        <div className="col-xs-4">
          <Panel>
            <Panel.Heading>Knee Dominant</Panel.Heading>
            <Panel.Body>Knee dominant exercises involve the knees and hips. They mainly work the quadriceps and glutes.</Panel.Body>
            <ListGroup>
              <ListGroupItem>Squat</ListGroupItem>
              <ListGroupItem>Leg Extenstions</ListGroupItem>
            </ListGroup>
          </Panel>
        </div>

        <div className="col-xs-4">
          <Panel>
            <Panel.Heading>Hip Dominant</Panel.Heading>
            <Panel.Body>Hip dominant exercises mainly work the posterior chain consisting of muscles on the back of your body like hamstrings, glutes, and spinal erectors.

</Panel.Body>
            <ListGroup>
              <ListGroupItem>Romanian Deadlift</ListGroupItem>
              <ListGroupItem>Leg Curls</ListGroupItem>
            </ListGroup>
          </Panel>
        </div>

        <div className="col-xs-4">
          <Panel>
            <Panel.Heading>Horizontal Push</Panel.Heading>
            <Panel.Body>This movement often consists of overhead movents. These exercises mainly target deltoids and triceps </Panel.Body>

            <ListGroup>
              <ListGroupItem>Dumbell Bench Press</ListGroupItem>
              <ListGroupItem>Push-ups</ListGroupItem>
            </ListGroup>
          </Panel>
        </div>

        <div className="col-xs-4">
          <Panel>
            <Panel.Heading>Horizontal Pull</Panel.Heading>
            <Panel.Body></Panel.Body>

            <ListGroup>
              <ListGroupItem>Seated Row</ListGroupItem>
              <ListGroupItem>Dumbell Row</ListGroupItem>
            </ListGroup>
          </Panel>
        </div>

        <div className="col-xs-4">
          <Panel>
            <Panel.Heading>Vertical Push</Panel.Heading>
            <Panel.Body></Panel.Body>

            <ListGroup>
              <ListGroupItem>Shoulder Press</ListGroupItem>
              <ListGroupItem>Lateral Raises</ListGroupItem>
            </ListGroup>
          </Panel>
        </div>

        <div className="col-xs-4">
          <Panel>
            <Panel.Heading>Vertical Pull</Panel.Heading>
            <Panel.Body></Panel.Body>
            <ListGroup>
              <ListGroupItem>Pullups</ListGroupItem>
              <ListGroupItem>Seated Lat Pulls</ListGroupItem>
            </ListGroup>
          </Panel>
        </div>
      </div>
    );
  }
}
