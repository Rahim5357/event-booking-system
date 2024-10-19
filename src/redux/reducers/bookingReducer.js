import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentBooking: null,
  currentEvent: null, // Add this line
  bookingHistory: [],
  loading: false,
  error: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    createBookingStart(state) {
      state.loading = true;
      state.error = null;
    },
    createBookingSuccess(state, action) {
      state.currentBooking = action.payload;
      state.bookingHistory.push(action.payload);
      state.loading = false;
    },
    createBookingFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearCurrentBooking(state) {
      state.currentBooking = null;
    },
    setCurrentEvent(state, action) { // Add this reducer
      state.currentEvent = action.payload;
    },
  },
});

export const { 
  createBookingStart, 
  createBookingSuccess, 
  createBookingFailure,
  clearCurrentBooking,
  setCurrentEvent // Add this to the exports
} = bookingSlice.actions;

export default bookingSlice.reducer;