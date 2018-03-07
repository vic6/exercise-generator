import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      // <nav className="navbar navbar-light bg-light">
      //   <a className="navbar-brand" href="#">
      //     <img
      //       src="./public/images/yoked.jpeg"
      //       width="30"
      //       height="30"
      //       className="d-inline-block align-top"
      //       alt=""
      //   />
      //   Bootstrap
      //   </a>
      // </nav>

      <Navbar>
    
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Ex Gen</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        </Nav>
      </Navbar>

      // <nav className="navbar">
      //   <a href='/'>
      //     <img src="./public/images/yoked.jpeg" alt='logo' width='60px' height='60px' />
      //   </a>
      //   Sup Dog
      // </nav>
      // <nav className="navbar navbar-light bg-light">
      //   <a className="navbar-brand" href="/">
      //     <img
      //       src="/public/images/yoked.jpeg"
      //       width="60"
      //       height="60"
      //       className="d-inline-block align-top"
      //       alt=""
      //     />
      //   </a>
      //   Yoked
      // </nav>
    );
  }
}
