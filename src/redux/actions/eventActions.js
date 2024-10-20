import { mockEvents } from '../../api/mockApi';

export const getEventsList = (search, filter) =>{
  const eventPayload = JSON.parse(JSON.stringify(mockEvents))
  return{
    type: "GET_EVENTS_LIST",
    payload: eventPayload,
    search,
    filter
  }
}

export const clickEventForBooking = (payload) =>{
  return{
    type: "CLICK_EVENT_FOR_BOOKING",
    payload: payload,
  }
}