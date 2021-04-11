import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Serie from './pages/Serie'
import Movie from './pages/Movie'
import Form from './pages/Form'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movie</Link>
            </li>
            <li>
              <Link to="/series">Serie</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/form/:slug">
            <Form />
          </Route>
          <Route path="/movies">
            <Movie />
          </Route>
          <Route path="/series">
            <Serie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
