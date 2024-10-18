import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentBooking: null,
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
  },
});

export const { 
  createBookingStart, 
  createBookingSuccess, 
  createBookingFailure,
  clearCurrentBooking
} = bookingSlice.actions;

export default bookingSlice.reducer;