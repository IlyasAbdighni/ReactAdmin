import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import './css/custom.css';

import reducers from './reducers';

import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDom.render(<Root />, document.getElementById('root'));
