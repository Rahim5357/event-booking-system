// components/EventCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openBookingModal } from '../redux/actions/bookingActions';
import { calculateDynamicPrice } from '../utils/pricingUtils';

const EventCard = ({ event }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const dynamicPrice = calculateDynamicPrice(event.price, event.seatsBooked, event.totalSeats);

  const handleBookNow = () => {
    if (!user.isAuthenticated) {
      alert('Please log in to book tickets');
      return;
    }
    dispatch(openBookingModal(event));
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
          <span className="text-green-500 font-bold">${dynamicPrice}</span>
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