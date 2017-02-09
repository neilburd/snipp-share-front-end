import React, {Component} from 'react';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './NavBar'

class Header extends Component{
  render(){
    return(
      <nav>
        <MuiThemeProvider>
          <NavBar />
        </MuiThemeProvider>
      </nav>

    )
  }
}

export default Header
