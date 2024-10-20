import { createStore } from 'redux';
import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import { eventsReducer } from './reducers/eventsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  events: eventsReducer
});

const store = createStore(rootReducer);

export default store;
