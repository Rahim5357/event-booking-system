import { 
  createBookingStart, 
  createBookingSuccess, 
  createBookingFailure, 
  clearCurrentBooking,
  setCurrentEvent
} from '../reducers/bookingReducer';
import { bookEventApi as createBooking } from '../../api/mockApi';
import { updateAvailability } from './eventActions';
// import { openModal } from '../reducers/modalReducer';

export const openBookingModal = (event) => (dispatch) => {
  dispatch(setCurrentEvent(event));
  // dispatch(openModal());
};

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