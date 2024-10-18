export const isEventAvailable = (event, selectedDate, selectedTickets) => {
    const availableTickets = event.availableTickets[selectedDate] || 0;
    return availableTickets >= selectedTickets;
};

export const generateBookingReference = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
};

export const calculateBookingExpirationTime = () => {
    const expirationTime = new Date();
    expirationTime.setMinutes(expirationTime.getMinutes() + 15);
    return expirationTime;
};