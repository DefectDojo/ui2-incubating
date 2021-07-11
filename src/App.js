import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/App.scss';
import { PrivateRoute } from './_components/PrivateRoute';
import Product from './views/Product';
import Login from './LoginPage/Login';


function App() {

  return (
    <Router>
      <PrivateRoute exact path="/products" component={Product}/>
      
      <Route path="/login" component={Login}/>
    </Router>

  );
}

export default App;
