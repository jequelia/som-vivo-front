import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import SessionService from '../services/sessionService';

const RoutePrivate = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => {
    if (!SessionService.isLoggedIn()) {
      return <Redirect to={{ pathname: '/login', 
                       state: { from: props.location } }} />
    }

    return <Component {...props} />
  }}/>
);

export default RoutePrivate;