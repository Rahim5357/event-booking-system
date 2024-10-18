// components/EventList.js
import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from '../redux/actions/eventActions';
import EventCard from './EventCard';
import { motion } from 'framer-motion';

const EventList = () => {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector(state => state.events);
  const { searchTerm, filters } = useSelector(state => state.filters);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !filters.category || event.category === filters.category;
      const matchesPrice = !filters.priceRange || 
        (event.price >= filters.priceRange[0] && event.price <= filters.priceRange[1]);
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [events, searchTerm, filters]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {filteredEvents.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <EventCard event={event} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default EventList;