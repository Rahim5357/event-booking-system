import React from 'react';

const BookingModal = () => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">dfjfd</h2>
        <p className="mb-4">Date: </p>
        <div className="mb-4">
          <label className="block mb-2">Select Tier:</label>
          <select 
            // value={selectedTier} 
            // onChange={(e) => setSelectedTier(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {/* {event.priceTiers.map(tier => (
              <option key={tier.name} value={tier.name}>
                {tier.name} - ${tier.price} ({tier.availableSeats} seats left)
              </option>
            ))} */}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Quantity:</label>
          <input 
            type="number" 
            min="1" 
            max="5" 
            // value={quantity} 
            // onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <p className="mb-4">Total Price: ${10000}</p>
        {/* {quantity > 3 && <p className="text-green-500 mb-4">10% group discount applied!</p>} */}
        {/* {error && <p className="text-red-500 mb-4">{""}</p>} */}
        <div className="flex justify-end">
          <button 
            // onClick={() => dispatch(closeBookingModal())}
            className="mr-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button 
            // onClick={handleBook}
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