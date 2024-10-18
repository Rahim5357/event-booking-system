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