import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/App.scss';
import { PrivateRoute } from './_components/PrivateRoute';
<<<<<<< HEAD
import Login from './LoginPage/Login';
import Layout from './views/Layout';
=======
import Product from './views/Product';
import Login from './LoginPage/Login';
>>>>>>> main


function App() {

  return (
    <Router>
<<<<<<< HEAD
      <Route exact path="/login" component={Login}/>

      <PrivateRoute path="/" component={Layout}/>
      
=======
      <PrivateRoute exact path="/products" component={Product}/>
      
      <Route path="/login" component={Login}/>
>>>>>>> main
    </Router>

  );
}

export default App;
