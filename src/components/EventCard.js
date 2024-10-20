// components/EventCard.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getBookingQuantity } from '../redux/actions/bookingActions';
import { clickEventForBooking } from '../redux/actions/eventActions';
import { calculateDynamicPrice } from '../utils/pricingUtils';

const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const history = useNavigate()
  const MAX_BOOKINGS = 10;
  const bookedQuantity = useSelector(state => state.userBookedEventQuantity);
    useEffect(() => {
      dispatch(getBookingQuantity());
    },[])
    

    const handleBookNow = () => {
      const currentBookings = bookedQuantity || 0;
    
      if (currentBookings < MAX_BOOKINGS) {
        dispatch(clickEventForBooking({ event }));
        history("/booking");
      } else {
        alert("You have reached the maximum booking limit of " + MAX_BOOKINGS + " events.");
      }
    };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="bg-gray-200 h-48 flex items-center justify-center">
        <span className="text-4xl">{event.category.charAt(0)}</span>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">{event.date}</span>
          <span className="text-green-500 font-bold">${event?.price}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">Available Seats: {event.totalSeats - event.seatsBooked}</span>
          <span className="bg-blue-500 text-white px-2 py-1 rounded">{event.category}</span>
        </div>
        <button 
          onClick={handleBookNow}
          className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventCard;