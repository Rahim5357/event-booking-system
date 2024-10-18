import { fetchEventsStart, fetchEventsSuccess, fetchEventsFailure, updateEventAvailability } from '../reducers/eventsReducer';
import { fetchEvents } from '../../api/mockApi';

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