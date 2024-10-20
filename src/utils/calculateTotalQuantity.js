export const calculateTotalQuantity = (events) => {
    return events.reduce((sum, event) => sum + event.quantity, 0);
};