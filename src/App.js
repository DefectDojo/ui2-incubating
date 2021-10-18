import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles/App.scss';
import { PrivateRoute } from './_components/PrivateRoute';
import Login from './_components/LoginPage/Login';
import Layout from './views/Layout';


function App() {

  return (
    <Router>
      <Route exact path="/login" component={Login}/>

      <PrivateRoute path="/" component={Layout}/>
      
    </Router>

  );
}

export default App;
