import React, { Component } from 'react';
import './styles/App.scss';
import Loading from './../src/components/shared/Loading';
import Login from './components/Login';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Loading/>*/}
        <Register></Register>
      </div>
    );
  }
}

export default App;
