import React, {Component} from 'react';
// import {Link} from 'react-router';

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
