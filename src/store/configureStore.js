import messagesReducer from '../reducers/messagesReducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default () => {
  const store = createStore(messagesReducer, applyMiddleware(thunk));
  return store;
};
