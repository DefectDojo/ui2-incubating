import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./components/Main/main";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Main} />
          <Route path="/product" component={Main} />
          <Route path="/engagements" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
