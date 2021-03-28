import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import CounterBoard from './views/CounterBoard';
import FormationBoard from './views/FormationBoard';
import DraftBoard from './views/DraftBoard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/draft" component={DraftBoard} />
          <Route path="/formation" component={FormationBoard} />
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
