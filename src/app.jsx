import React from 'react';
import ReactDOM from 'react-dom';
import ApiTest from './components/ApiTest';

const App = () => (
  <div>
    <ApiTest />
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));
