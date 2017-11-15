import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import redc from './Teste4/reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Teste4/sagas/index';

// import Calc from './Teste2/components/Calc';

import Teste4 from './Teste4/components/Index';

import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(redc,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Teste4 />
        </div>
      </Provider>
    );
  }
}

export default App;
