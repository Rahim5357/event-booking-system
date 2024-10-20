import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEventsList } from '../redux/actions/eventActions';
import EventCard from './EventCard';

const EventList = () => {
  const dispatch = useDispatch();
  const eventList = useSelector(state => state.events);
  console.log(eventList)
  useEffect(() => {
    dispatch(getEventsList());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {
        eventList?.map((event, index) => (
          <div key={index}>
            <EventCard event={event} />
          </div>
        ))
      }
    </div>
  );
};

export default EventList;