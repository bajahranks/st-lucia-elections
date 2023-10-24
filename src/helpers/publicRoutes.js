import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './util';

/**
 * Handle the public routes.
 * Component does not require token else return to homepage.
 */
function PublicRoute({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => !getToken() ?
        <Component {...props} /> :
        <Redirect to={{pathname: '/'}} />}
    />
  )
}

export default PublicRoute;