import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const logger=(store)=>{
  return next =>{
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result=next(action);
      console.log('[Middleware] next state',store.getState());
      return result;
    }
  }
};

const store=createStore(reducer,applyMiddleware(logger,thunk));


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
