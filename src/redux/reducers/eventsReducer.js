import { createSlice } from '@reduxjs/toolkit';
import { fetchEventsApi } from '../../api/mockApi';

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


export const eventsReducer = (state = [], action) => {
  switch (action.type){
    case "GET_EVENTS_LIST":
      return action.payload;
    default:
      return state;
  }
}