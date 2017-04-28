import React from 'react';
import { Route } from 'react-router';
import App from '../App';
import SnippetsContainer from '../containers/SnippetsContainer.js';

module.exports = (
  <Route path='/' component={ App } >
  //add Routes for each indivual snippets so each snippet has its own url.
    <Route
      path='/snippets'
      component={ SnippetsContainer } />
      
  </Route>
)
