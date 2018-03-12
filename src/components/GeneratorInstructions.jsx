import React from 'react';
import { PageHeader } from 'react-bootstrap';

const GeneratorInstructions = () => (
    <div>
      <PageHeader style={{ marginTop: 80 }}>Generator Instructions</PageHeader>
      <p style={{ marginBottom: 50 }}>
        This workout has been generated based on the template seen above. Click the exercise name to
        see a description. If you prefer to perform a different exercise, click the regenerate
        button and a new exercise for that movement group will be selected. You can also regenerate
        the whole days exercises by clicking on the day title.
      </p>
    </div>
  );

export default GeneratorInstructions;
