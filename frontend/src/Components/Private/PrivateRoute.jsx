import React from 'react';

import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest}) => {
const auth = localStorage.getItem('auth');


  return (
    <Route
      {...rest}
      render={() => auth === 'vendedor'
        ? <Component {...rest} />
        : <Redirect to="/login" />
      }
    />
  )
}

export default PrivateRoute;