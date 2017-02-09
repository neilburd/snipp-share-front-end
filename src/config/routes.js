import React from 'react';
import { Route } from 'react-router';
import App from '../App';
import SnippetsContainer from '../containers/SnippetsContainer.js';

module.exports = (
  <Route path='/' component={ App } >
    <Route
      path='/todos'
      component={ SnippetsContainer } />
  </Route>
)
