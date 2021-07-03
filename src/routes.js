import React from 'react';
import Product from "./views/Product";
import {Route} from 'react-router';

export const routes = [
    {
      path: "/products",
      component: Product
    },
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