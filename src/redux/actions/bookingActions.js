import { createBookingStart, createBookingSuccess, createBookingFailure, clearCurrentBooking } from '../reducers/bookingReducer';
import { createBooking } from '../../api/mockApi';
import { updateAvailability } from './eventActions';

export const bookEvent = (bookingData) => async (dispatch) => {
  try {
    dispatch(createBookingStart());
    const booking = await createBooking(bookingData);
    dispatch(createBookingSuccess(booking));
    dispatch(updateAvailability(booking.eventId, booking.date, booking.remainingTickets));
  } catch (error) {
    dispatch(createBookingFailure(error.message));
  }
};

export const clearBooking = () => (dispatch) => {
  dispatch(clearCurrentBooking());
};