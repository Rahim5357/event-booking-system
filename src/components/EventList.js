import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEventsList } from '../redux/actions/eventActions';
import EventCard from './EventCard';
import { motion } from 'framer-motion';

const EventList = () => {
  const dispatch = useDispatch();
  const eventList = useSelector(state => state.events);
  useEffect(() => {
    dispatch(getEventsList());
  }, []);

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {eventList.map((event, index) => (
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