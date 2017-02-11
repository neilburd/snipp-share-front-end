import React from 'react';


const NavBar = (props) => (
    <AppBar
      title={'Snippet'}
      iconElementLeft={<IconButton><NavigationClose /></IconButton>}
      iconElementRight={<FlatButton label="Save" />}
    />

);

export default NavBar;
