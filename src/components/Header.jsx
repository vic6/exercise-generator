import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src="/public/images/yoked.jpeg"
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        Yoked
      </nav>
    );
  }
}
