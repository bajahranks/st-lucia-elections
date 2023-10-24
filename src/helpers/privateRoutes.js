import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './util';

/**
 * Handle the private routes.
 * Component requires a token else redirect to login page.
 */
function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => getToken() ?
        <Component {...props} /> :
        <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

export default PrivateRoute;