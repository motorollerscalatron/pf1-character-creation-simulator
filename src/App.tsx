import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CounterBoard from "./views/CounterBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={CounterBoard} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
