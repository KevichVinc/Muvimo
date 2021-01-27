import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducer from './appReducer';
import editProfileReducer from './editProfileReducer';

const allReducers = combineReducers({
  editProfile: editProfileReducer,
  app: appReducer,
});

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
