import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EventDataChart = () => {
  const events = useSelector(state => state.events.events);

  const chartData = events.map(event => ({
    name: event.title,
    availableSeats: event.totalSeats - event.seatsBooked,
    bookedSeats: event.seatsBooked,
  }));

  return (
    <div className="w-full h-96 bg-white shadow-lg rounded-lg p-4 mb-8">
      <h2 className="text-2xl font-bold mb-4">Event Booking Status</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="availableSeats" fill="#4CAF50" name="Available Seats" />
          <Bar dataKey="bookedSeats" fill="#FFC107" name="Booked Seats" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventDataChart;