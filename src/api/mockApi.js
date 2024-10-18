// api/mockApi.js
const mockEvents = [
        {
          id: 1,
          title: 'Summer Music Festival',
          description: 'A weekend of live music performances',
          category: 'Concerts',
          date: '2023-07-15',
          price: 80,
          totalSeats: 1000,
          seatsBooked: 750,
          priceTiers: [
            { name: 'VIP', price: 150, availableSeats: 50 },
            { name: 'Standard', price: 80, availableSeats: 150 },
            { name: 'Economy', price: 50, availableSeats: 50 }
          ]
        },
        {
          id: 2,
          title: 'Tech Conference 2023',
          description: 'Learn about the latest technologies and innovations',
          category: 'Conferences',
          date: '2023-09-10',
          price: 120,
          totalSeats: 500,
          seatsBooked: 300,
          priceTiers: [
            { name: 'VIP', price: 200, availableSeats: 50 },
            { name: 'Standard', price: 120, availableSeats: 100 },
            { name: 'Economy', price: 80, availableSeats: 50 }
          ]
        },
        {
          id: 3,
          title: 'NBA Finals Game',
          description: 'Watch the final game of the NBA season live',
          category: 'Sports',
          date: '2023-06-18',
          price: 200,
          totalSeats: 20000,
          seatsBooked: 18000,
          priceTiers: [
            { name: 'VIP', price: 500, availableSeats: 500 },
            { name: 'Standard', price: 200, availableSeats: 1000 },
            { name: 'Economy', price: 100, availableSeats: 500 }
          ]
        },
        {
          id: 4,
          title: 'Art Expo 2023',
          description: 'Explore modern art from around the world',
          category: 'Exhibitions',
          date: '2023-10-01',
          price: 50,
          totalSeats: 300,
          seatsBooked: 200,
          priceTiers: [
            { name: 'VIP', price: 100, availableSeats: 30 },
            { name: 'Standard', price: 50, availableSeats: 100 },
            { name: 'Economy', price: 30, availableSeats: 50 }
          ]
        },
        {
          id: 5,
          title: 'Film Premiere: Action Hero',
          description: 'Attend the world premiere of the latest blockbuster',
          category: 'Movies',
          date: '2023-11-20',
          price: 60,
          totalSeats: 500,
          seatsBooked: 400,
          priceTiers: [
            { name: 'VIP', price: 150, availableSeats: 50 },
            { name: 'Standard', price: 60, availableSeats: 100 },
            { name: 'Economy', price: 40, availableSeats: 50 }
          ]
        },
        {
          id: 6,
          title: 'Culinary Masterclass',
          description: 'Learn gourmet cooking from top chefs',
          category: 'Workshops',
          date: '2023-12-05',
          price: 90,
          totalSeats: 100,
          seatsBooked: 80,
          priceTiers: [
            { name: 'VIP', price: 200, availableSeats: 10 },
            { name: 'Standard', price: 90, availableSeats: 30 },
            { name: 'Economy', price: 50, availableSeats: 10 }
          ]
        },
        {
          id: 7,
          title: 'Charity Gala Dinner',
          description: 'A formal dinner supporting a great cause',
          category: 'Charity',
          date: '2023-12-12',
          price: 150,
          totalSeats: 200,
          seatsBooked: 160,
          priceTiers: [
            { name: 'VIP', price: 300, availableSeats: 20 },
            { name: 'Standard', price: 150, availableSeats: 50 },
            { name: 'Economy', price: 100, availableSeats: 10 }
          ]
        },
        {
          id: 8,
          title: 'Startup Pitch Event',
          description: 'Watch aspiring entrepreneurs pitch their ideas',
          category: 'Networking',
          date: '2024-01-15',
          price: 70,
          totalSeats: 150,
          seatsBooked: 120,
          priceTiers: [
            { name: 'VIP', price: 150, availableSeats: 20 },
            { name: 'Standard', price: 70, availableSeats: 40 },
            { name: 'Economy', price: 50, availableSeats: 20 }
          ]
        },
        {
          id: 9,
          title: 'Stand-Up Comedy Night',
          description: 'Enjoy a night of laughter with top comedians',
          category: 'Comedy',
          date: '2024-02-05',
          price: 40,
          totalSeats: 300,
          seatsBooked: 250,
          priceTiers: [
            { name: 'VIP', price: 100, availableSeats: 20 },
            { name: 'Standard', price: 40, availableSeats: 50 },
            { name: 'Economy', price: 25, availableSeats: 30 }
          ]
        },
        {
          id: 10,
          title: 'Yoga Retreat 2024',
          description: 'Relax and rejuvenate with expert instructors',
          category: 'Health & Wellness',
          date: '2024-03-10',
          price: 200,
          totalSeats: 100,
          seatsBooked: 80,
          priceTiers: [
            { name: 'VIP', price: 300, availableSeats: 10 },
            { name: 'Standard', price: 200, availableSeats: 20 },
            { name: 'Economy', price: 100, availableSeats: 10 }
          ]
        },
        {
          id: 11,
          title: 'Fashion Week 2024',
          description: 'See the latest trends in fashion',
          category: 'Fashion',
          date: '2024-04-15',
          price: 150,
          totalSeats: 400,
          seatsBooked: 350,
          priceTiers: [
            { name: 'VIP', price: 300, availableSeats: 30 },
            { name: 'Standard', price: 150, availableSeats: 60 },
            { name: 'Economy', price: 80, availableSeats: 30 }
          ]
        },
        {
          id: 12,
          title: 'Photography Workshop',
          description: 'Learn professional photography techniques',
          category: 'Workshops',
          date: '2024-05-05',
          price: 120,
          totalSeats: 50,
          seatsBooked: 40,
          priceTiers: [
            { name: 'VIP', price: 250, availableSeats: 5 },
            { name: 'Standard', price: 120, availableSeats: 10 },
            { name: 'Economy', price: 70, availableSeats: 5 }
          ]
        },
        {
          id: 13,
          title: 'Motorsport Grand Prix',
          description: 'Experience the excitement of high-speed racing',
          category: 'Sports',
          date: '2024-06-18',
          price: 180,
          totalSeats: 5000,
          seatsBooked: 4000,
          priceTiers: [
            { name: 'VIP', price: 500, availableSeats: 100 },
            { name: 'Standard', price: 180, availableSeats: 300 },
            { name: 'Economy', price: 100, availableSeats: 200 }
          ]
        },
        {
          id: 14,
          title: 'Cultural Dance Performance',
          description: 'A mesmerizing performance of traditional dances',
          category: 'Performing Arts',
          date: '2024-07-01',
          price: 60,
          totalSeats: 250,
          seatsBooked: 200,
          priceTiers: [
            { name: 'VIP', price: 120, availableSeats: 20 },
            { name: 'Standard', price: 60, availableSeats: 50 },
            { name: 'Economy', price: 30, availableSeats: 30 }
          ]
        },
        {
          id: 15,
          title: 'Fitness Bootcamp',
          description: 'An intensive fitness training session',
          category: 'Health & Wellness',
          date: '2024-08-05',
          price: 50,
          totalSeats: 100,
          seatsBooked: 90,
          priceTiers: [
            { name: 'VIP', price: 100, availableSeats: 10 },
            { name: 'Standard', price: 50, availableSeats: 20 },
            { name: 'Economy', price: 30, availableSeats: 10 }
          ]
        },
    // Add more mock events here...
  ];
  
  export const fetchEventsApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockEvents);
      }, 1000); // Simulate network delay
    });
  };
  
  export const bookEventApi = (eventId, tier, quantity) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const event = mockEvents.find(e => e.id === eventId);
        if (!event) {
          reject(new Error('Event not found'));
          return;
        }
  
        const selectedTier = event.priceTiers.find(t => t.name === tier);
        if (!selectedTier) {
          reject(new Error('Invalid tier selected'));
          return;
        }
  
        if (selectedTier.availableSeats < quantity) {
          reject(new Error('Not enough seats available'));
          return;
        }
  
        // Update available seats and booked seats
        selectedTier.availableSeats -= quantity;
        event.seatsBooked += quantity;
  
        resolve({ success: true, message: 'Booking successful' });
      }, 1000); // Simulate network delay
    });
  };