import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const EventPopularityChart = () => {
  const events = useSelector(state => state.events.events);

  const chartData = events.reduce((acc, event) => {
    const existingCategory = acc.find(item => item.name === event.category);
    if (existingCategory) {
      existingCategory.value += event.seatsBooked;
    } else {
      acc.push({ name: event.category, value: event.seatsBooked });
    }
    return acc;
  }, []);

  return (
    <div className="w-full h-96 bg-white shadow-lg rounded-lg p-4 mb-8">
      <h2 className="text-2xl font-bold mb-4">Event Popularity by Category</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventPopularityChart;
