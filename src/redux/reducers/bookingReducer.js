import { getLocalStorageValue, setLocalStorageValue } from '../../utils/localStorageValue';
import {calculateTotalQuantity} from "../../utils/calculateTotalQuantity";

export const eventBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case "EVENT_BOOKING": {
      const userName = getLocalStorageValue("username");
      const userEvents = getLocalStorageValue(`${userName}`) || [];
      const eventBookingList = getLocalStorageValue("eventBookingList") || [];

      // Find if the event with the selected tier is already booked
      const existingEvent = eventBookingList.find(
        ({ id, selectedTier }) =>
          id === action.payload?.id && selectedTier === action.payload?.selectedTier
      );

      // Update the quantity if the event exists, otherwise keep the payload quantity
      const updatedPayload = {
        ...action.payload,
        quantity: existingEvent
          ? action.payload.quantity + existingEvent.quantity
          : action.payload.quantity
      };

      // Update user-specific event bookings
      const updatedUserEvents = [...userEvents, action.payload];

      // Ensure we don't add the same event multiple times in eventBookingList
      const updatedEventBookingList = existingEvent
        ? eventBookingList.map(event =>
            event.id === action.payload?.id && event.selectedTier === action.payload?.selectedTier
              ? { ...event, quantity: updatedPayload.quantity }
              : event
          )
        : [...eventBookingList, {
          id : updatedPayload?.id,
          selectedTier: updatedPayload?.selectedTier,
          quantity: updatedPayload?.quantity
        }];

      // Save the updated values back to localStorage
      setLocalStorageValue(`${userName}`, JSON.stringify(updatedUserEvents));
      setLocalStorageValue("eventBookingList", JSON.stringify(updatedEventBookingList));

      return {
        ...state,
        eventBookingList: updatedEventBookingList
      };
    }
    default:
      return state;
  }
};


export const getBookedEventsReducer = (state = [], action) => {
  switch (action.type){
    case "GET_BOOKED_EVENTS":
      const userName = getLocalStorageValue("username");
      return getLocalStorageValue(`${userName}`) || [];
    default:
      return state;
  }
}

export const getTotalBookedEventsReducer = (state = [], action) => {
  switch (action.type){
    case "GET_TOTAL_BOOKED_EVENTS":
      return getLocalStorageValue("eventBookingList");
    default:
      return state
  }
}

export const getBookingQuantityReducer = (state = 0, action) => {
  switch (action.type){
    case "GET_BOOKING_QUANTITY":
      const userName = getLocalStorageValue("username");
      const userBookedEvents = getLocalStorageValue(`${userName}`) || [];
      return calculateTotalQuantity(userBookedEvents);
    default:
      return state;
  }
}