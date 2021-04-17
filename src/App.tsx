import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import CharacterCreation from './views/CharacterCreation/CharacterCreation';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={CharacterCreation} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
