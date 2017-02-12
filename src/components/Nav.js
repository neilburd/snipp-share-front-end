import React, {Component} from 'react';
// import {Link} from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import 'bootstrap/dist/css/bootstrap.css'

class Header extends Component{
  render(){
    return(
      <Navbar  collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Snipp-Share</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

    )
  }
}

export default Header
