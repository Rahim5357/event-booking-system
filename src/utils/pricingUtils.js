// pricingUtils.js

/**
 * Calculates the dynamic price based on the base price, seats booked, and total seats
 * @param {number} basePrice - The base price of the event
 * @param {number} seatsBooked - Number of seats already booked
 * @param {number} totalSeats - Total number of seats available
 * @returns {number} The calculated dynamic price
 */
export const calculateDynamicPrice = (basePrice, seatsBooked, totalSeats) => {
  // Calculate the percentage of seats booked
  const occupancyRate = seatsBooked / totalSeats;

  // Define the maximum price increase (e.g., 50% increase)
  const maxPriceIncrease = 0.5;

  // Calculate the price increase factor
  const priceIncreaseFactor = 1 + (occupancyRate * maxPriceIncrease);

  // Calculate the dynamic price
  const dynamicPrice = basePrice * priceIncreaseFactor;

  // Round to two decimal places
  return Number(dynamicPrice.toFixed(2));
};

// Keeping the existing functions from the first snippet
export const calculateTotalPrice = (basePrice, quantity, discountCode) => {
  let total = basePrice * quantity;
  
  if (discountCode === 'EARLY10') {
    total *= 0.9; // 10% discount
  } else if (discountCode === 'GROUP20' && quantity >= 5) {
    total *= 0.8; // 20% discount for groups of 5 or more
  }
  
  return total.toFixed(2);
};

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};