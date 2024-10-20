import { createStore } from 'redux';
import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import { clickEventForBookingReducer, getEventsReducer } from './reducers/eventsReducer';
import { eventBookingReducer, getBookedEventsReducer, getBookingQuantityReducer, getTotalBookedEventsReducer } from './reducers/bookingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  events: getEventsReducer,
  clickEvent: clickEventForBookingReducer,
  eventsBook: eventBookingReducer,
  bookedEvents: getBookedEventsReducer,
  totalBookedEvents: getTotalBookedEventsReducer,
  userBookedEventQuantity: getBookingQuantityReducer
});

const store = createStore(rootReducer);

export default store;
