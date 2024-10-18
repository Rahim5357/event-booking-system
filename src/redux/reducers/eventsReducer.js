import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    fetchEventsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEventsSuccess(state, action) {
      state.events = action.payload;
      state.loading = false;
    },
    fetchEventsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateEventAvailability(state, action) {
      const { eventId, date, availableTickets } = action.payload;
      const event = state.events.find(e => e.id === eventId);
      if (event) {
        event.availableTickets[date] = availableTickets;
      }
    },
  },
});

export const { 
  fetchEventsStart, 
  fetchEventsSuccess, 
  fetchEventsFailure,
  updateEventAvailability
} = eventsSlice.actions;

export default eventsSlice.reducer;