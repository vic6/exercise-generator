import React from 'react';
import { Jumbotron, PageHeader, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

const SiteOverview = () => (
    <div>
      <div className="col-xs-12">
        <Jumbotron>
          <h1>ExGen</h1>
          <p>
            This simple exercise utility generates randomized exercises based on the bodys planes of
            motion for a full body workout.
          </p>
        </Jumbotron>
      </div>
      <PageHeader className="text-center">The 6 Primary Movement Patterns</PageHeader>

      <p className="col-xs-12">
        Generally, we recommend compound exercises that allow you to use a lot of muscle and lift
        heavy weights for your main lifts, regardless of your level of training experience. To help
        with exercise selection, we’ll categorize the compound exercises further according to their
        movement patterns: knee dominant, hip dominant, vertical push/pull, and horizontal push/pull
        exercises. If you choose from these four, you’ll have your bases mostly covered.
      </p>
      <div className="col-xs-4">
        <Panel>
          <Panel.Heading>Knee Dominant</Panel.Heading>
          <ListGroup>
            <ListGroupItem>Squat</ListGroupItem>
            <ListGroupItem>Leg Extenstions</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>

      <div className="col-xs-4">
        <Panel>
          <Panel.Heading>Hip Dominant</Panel.Heading>
          <ListGroup>
            <ListGroupItem>Romanian Deadlift</ListGroupItem>
            <ListGroupItem>Leg Curls</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>

      <div className="col-xs-4">
        <Panel>
          <Panel.Heading>Horizontal Push</Panel.Heading>
          <ListGroup>
            <ListGroupItem>Dumbell Bench Press</ListGroupItem>
            <ListGroupItem>Push-ups</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>

      <div className="col-xs-4">
        <Panel>
          <Panel.Heading>Horizontal Pull</Panel.Heading>
          <ListGroup>
            <ListGroupItem>Seated Row</ListGroupItem>
            <ListGroupItem>Dumbell Row</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>

      <div className="col-xs-4">
        <Panel>
          <Panel.Heading>Vertical Push</Panel.Heading>
          <ListGroup>
            <ListGroupItem>Shoulder Press</ListGroupItem>
            <ListGroupItem>Lateral Raises</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>

      <div className="col-xs-4">
        <Panel>
          <Panel.Heading>Vertical Pull</Panel.Heading>
          <ListGroup>
            <ListGroupItem>Pullups</ListGroupItem>
            <ListGroupItem>Seated Lat Pulls</ListGroupItem>
          </ListGroup>
        </Panel>
      </div>
    </div>
  );

export default SiteOverview;
