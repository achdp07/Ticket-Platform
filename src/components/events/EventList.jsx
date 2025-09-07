import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { events } from "./Events";
import PageAnimation from "../ui/PageAnimation";
import LoadingSpinner from '../ui/LoadinngSpinner';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';


const EventList = () => {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageAnimation>
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full w-full flex justify-center items-center"
        >
          <LoadingSpinner 
            size="2xl"           // Instead of size={12}, use predefined sizes
            color="blue"          // Instead of "text-red-500", just use "red"
            variant="border"     // Optional: specify variant
            label="Loading page..." // Optional: for accessibility
          />
        </motion.div>
      ) : (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Link key={event.id} to={`/events/eventdetail/${event.id}`}>
          <EventCard {...event} /> {/* spread props into EventCard */}
        </Link>
      ))}
    </div>
      )}
    </PageAnimation>
  );
};

export default EventList;

