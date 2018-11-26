import React, { Component } from 'react';
import './styles/App.scss';
import Loading from './../src/components/shared/Loading';
import Login from './components/Login';
import Register from './components/Register';
import Timeline from './components/Timeline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/timeline" component={Timeline} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
