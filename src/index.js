// two lines below have to be on top of the list for the code to work
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import App from './components/App';
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import messagesReducer from "./reducers/messages";

// const store = createStore(messagesReducer, (applyMiddleware(thunk)));

const store = configureStore();

store.dispatch({ type: "FETCH_MESSAGES" });

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
