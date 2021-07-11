import React from 'react';
import { Route, Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { isLoggedIn } from '../services/auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isLoggedIn()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login' }} />
=======

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
>>>>>>> main
    )} />
)