import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export default () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
};
