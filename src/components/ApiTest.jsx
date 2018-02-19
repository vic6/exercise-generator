import React, { Component } from 'react';
import axios from 'axios';

export default class ApiTest extends Component {
  state = { data: '' };

  componentDidMount() {
    axios.get(`https://wger.de/api/v2/exercisecategory/`).then(res => {
      const data = JSON.stringify(res.data, null, 4);
      this.setState({
        data
      });
    });
  }
  render() {
    return <pre>{this.state.data}</pre>;
  }
}
