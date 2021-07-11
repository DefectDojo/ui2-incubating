import { Button } from '@material-ui/core';
import React from 'react';
import {authenticate} from '../services/auth'
import { useHistory} from "react-router-dom";


function processLogin(history){
  var logged = authenticate("aniket","aniketbhat")
  if(logged){
    history.push("/products")
  }
}

function Login() {
    let history = useHistory();
    return (
      <div>
      <h1>Login Page</h1>
      <Button onClick={processLogin(history)}> Log In </Button>
      </div>
    );
    
  }

export default Login