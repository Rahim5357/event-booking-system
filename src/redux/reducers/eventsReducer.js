import { getLocalStorageValue } from "../../utils/localStorageValue";
import { updateMockEvents } from "../../utils/updateMockEvents";

export const getEventsReducer = (state = [], action) => {
  switch (action.type){
    case "GET_EVENTS_LIST":
      const bookedEventList = getLocalStorageValue("eventBookingList");
      const updatedEventsList = updateMockEvents(bookedEventList, action.payload, action.search, action.filter);
      return updatedEventsList;
    default:
      return state;
  }
}

export const clickEventForBookingReducer = (state= {}, action) =>{
  switch (action.type){
    case "CLICK_EVENT_FOR_BOOKING":
      return action.payload;
    default:
      return state;
  }
}