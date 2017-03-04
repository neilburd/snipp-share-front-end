import React, {Component} from 'react';
// import {Link} from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import 'bootstrap/dist/css/bootstrap.css'

class Header extends Component{
  render(){
    let title ="{snipp-share}"
    return(
      <Navbar  collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/snippets" className="monospace"> {title} </a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#"></NavItem>
        <NavItem eventKey={2} href="#"></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

    )
  }
}

export default Header
