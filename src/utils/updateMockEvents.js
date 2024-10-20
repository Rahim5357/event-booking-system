import { filterEvents } from "./filterEvents";

export function updateMockEvents(bookedEventList, mockEvents, search, filter) {
    if (bookedEventList) {
        bookedEventList.forEach((bookedEvent) => {
            const eventToUpdate = mockEvents?.find(event => event.id === bookedEvent.id);

            if (eventToUpdate) {
                // Update booked seats
                eventToUpdate.seatsBooked += bookedEvent.quantity;

                const tierToUpdate = eventToUpdate.priceTiers?.find(tier => tier.name === bookedEvent.selectedTier);
                
                if (tierToUpdate) {
                    // Update available seats
                    tierToUpdate.availableSeats -= bookedEvent.quantity;

                    // Calculate the total booked seats to determine price adjustment
                    const totalBooked = eventToUpdate.seatsBooked;
                    const totalSeats = eventToUpdate.totalSeats;

                    // Calculate the percentage of seats booked
                    const bookedPercentage = (totalBooked / totalSeats) * 100;
                    
                    // Check if at least 10% of seats are booked
                    if (bookedPercentage >= 10) {
                        // Determine how many increments of 10% have been reached
                        const priceIncreaseSteps = Math.floor(bookedPercentage / 10);

                        // Adjust price for the selected tier
                        eventToUpdate.price = Math.ceil(eventToUpdate.price * Math.pow(1.1, priceIncreaseSteps));

                        // Adjust prices for all tiers
                        eventToUpdate.priceTiers.forEach(tier => {
                            tier.price = Math.ceil(tier.price * Math.pow(1.1, priceIncreaseSteps));
                        });
                    }
                }
            }
        });
    }

    if (!!search) {
        mockEvents = mockEvents?.filter(({ title }) => title?.toLowerCase()?.includes(search?.toLowerCase()));
    }
    if(!!filter){
        mockEvents = filterEvents(mockEvents, filter?.category, filter?.priceRange)
    }
    return mockEvents;
}
