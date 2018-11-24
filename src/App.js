import React, { Component } from 'react';
import './styles/App.scss';
import Loading from './../src/components/shared/Loading';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Loading/>*/}
        <Login></Login>
      </div>
    );
  }
}

export default App;
