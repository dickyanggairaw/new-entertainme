import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Serie from './pages/Serie'
import Movie from './pages/Movie'
import Form from './pages/Form'
import EditForm from './pages/EditForm'
import Favorite from './pages/Favorite'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/editForm/:id">
            <EditForm />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/movies">
            <Movie />
          </Route>
          <Route path="/favorites">
            <Favorite />
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
