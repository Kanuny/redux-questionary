import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Survey from './components/Survey';
import Answers from './components/Answers';

import store from './redux/create';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Survey />
          <Answers index="1" />
        </div>
      </Provider>
    );
  }
}

export default App;
