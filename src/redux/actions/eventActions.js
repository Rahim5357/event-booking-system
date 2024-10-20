import { fetchEventsStart, fetchEventsSuccess, fetchEventsFailure, updateEventAvailability } from '../reducers/eventsReducer';
import { fetchEventsApi as fetchEvents, mockEvents } from '../../api/mockApi';

export const getEvents = () => async (dispatch) => {
  try {
    dispatch(fetchEventsStart());
    const events = await fetchEvents();
    dispatch(fetchEventsSuccess(events));
  } catch (error) {
    dispatch(fetchEventsFailure(error.message));
  }
};

export const updateAvailability = (eventId, date, availableTickets) => (dispatch) => {
  dispatch(updateEventAvailability({ eventId, date, availableTickets }));
};

export const setFilters = (filters) => ({
  type: 'SET_FILTERS',
  payload: filters
});

export const setSearchTerm = (term) => ({
  type: 'SET_SEARCH_TERM',
  payload: term
});

export const getEventsList = () =>{
  return{
    type: "GET_EVENTS_LIST",
    payload: mockEvents
  }
}