import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findTicketPrice } from '../utils/pricingUtils';
import { eventBook, getBookedEvents, getBookingQuantity } from '../redux/actions/bookingActions';
import { useNavigate } from 'react-router-dom';

const BookingModal = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const MAX_BOOKINGS = 10;
  const [quantity, setQuantity] = useState(1);
  const [selectedTier, setSelectedTier] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState(false);
  const { event } = useSelector(state => state.clickEvent);
  const bookedQuantity = useSelector(state => state.userBookedEventQuantity);

  useEffect(() => {
    const price = findTicketPrice(selectedTier, event.priceTiers);
    const total = quantity ? quantity * price : 0;

    setTotalPrice(total);

    if (quantity > 3 && quantity <= 5) {
      const discountValue = Math.ceil(total * 0.10);
      setDiscount(discountValue);
    } else {
      setDiscount(0);
    }

    setError(quantity > 5);
  }, [selectedTier, quantity, event.priceTiers]);

  useEffect(() => {
    dispatch(getBookingQuantity());
  }, []);

  function selectedTierSeats(){
    return event?.priceTiers?.find((tireEle) => tireEle?.name == selectedTier)?.availableSeats
  }

  const handleBook = () => {
    let seatsAvailable = selectedTierSeats()
    const currentBookings = bookedQuantity || 0;
    if (!error && currentBookings + quantity <= MAX_BOOKINGS && seatsAvailable >= quantity) {
      dispatch(eventBook({ ...event, quantity, selectedTier, totalPrice: totalPrice - discount }));
      history("/events");
    }else if(seatsAvailable < quantity){
      alert(`You can't book ${quantity} tickets because it exceeds the available seats`);
    } else {
      alert(`You can't book ${quantity} tickets because it exceeds the limit of ${MAX_BOOKINGS} events.`);
    }
  };

  const handleCancel = () => {
    history("/events");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{event?.description}</h2>
        <p className="mb-4">Date: {moment(event.date).format('MMMM Do YYYY')}</p>
        <div className="mb-4">
          <label className="block mb-2">Select Tier:</label>
          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Tier</option>
            {event.priceTiers.map(tier => (
              <option key={tier.name} value={tier.name} disabled={tier.availableSeats == 0}>
                {tier.name} - ${tier.price} ({tier.availableSeats} seats left)
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Quantity:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={quantity}
            onChange={(e) => setQuantity(Math.min(Math.max(parseInt(e.target.value), 1), 5))}
            className="w-full p-2 border rounded"
          />
        </div>
        <p>Total Price: ${totalPrice}</p>
        <p>Discount: ${discount}</p>
        <p className="mb-4">Final Price: ${totalPrice - discount}</p>
        {!error && quantity > 3 && <p className="text-green-500 mb-4">10% group discount applied!</p>}
        {error && <p className="text-red-500 mb-4">{"You can book up to a maximum of 5 tickets per booking."}</p>}
        <div className="flex justify-end">
          <button
            onClick={handleCancel}
            className="mr-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleBook}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
