import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './util';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => !getToken() ?
        <Component {...props} /> :
        <Redirect to={{ pathname: '/' }} />}
    />
  )
}

export default PublicRoute;