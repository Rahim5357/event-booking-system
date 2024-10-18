import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './reducers/eventsReducer';
import userReducer from './reducers/userReducer';
import bookingReducer from './reducers/bookingReducer';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    user: userReducer,
    booking: bookingReducer,
  },
});

export default store;