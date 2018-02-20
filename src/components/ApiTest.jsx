import React, { Component } from 'react';
import axios from 'axios';

export default class ApiTest extends Component {
  state = { data: '' };

  componentDidMount() {
    axios.get(`https://wger.de/api/v2/exercise/`).then(res => {
      // const exerciseGroup = JSON.stringify(
      //   res.data.results.filter(exercise => exercise.category === 10),
      //   null,
      //   4-
      // );
      let data = res.data.results.filter(exercise => exercise.category === 10);
      data = data. map(exercise => <div>{exercise.description}</div>);
      console.log(data);
      data = JSON.stringify(data, null, 4);
      this.setState({
        data
      });
    });
  }
  render() {
    return <pre>{this.state.data}</pre>;
  }
}
