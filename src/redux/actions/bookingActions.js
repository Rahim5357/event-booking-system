export const eventBook = (payload) => {
  return {
    type: "EVENT_BOOKING",
    payload: payload
  }
}

export const getBookedEvents = (search, filter) =>{
  return{
    type: "GET_BOOKED_EVENTS",
    search,
    filter
  }
}

export const getTotalBookedEvents = () => {
  return{
    type : "GET_TOTAL_BOOKED_EVENTS"
  }
}

export const getBookingQuantity = () => {
  return {
    type: "GET_BOOKING_QUANTITY"
  }
}