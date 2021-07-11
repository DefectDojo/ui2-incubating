import React from 'react';
import Product from "./views/Product";
import {Route} from 'react-router';
import Login from './LoginPage/Login';

export const routes = [
    {
      path: "/products",
      component: Product
    },
    {
      path:"/login",
      component: Login
    }
  ];



  export function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }
  