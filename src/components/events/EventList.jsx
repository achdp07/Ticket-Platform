import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { events } from "./Events";
import PageAnimation from "../ui/PageAnimation";
import LoadingSpinner from '../ui/LoadinngSpinner';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const EventList = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // show 6 events per page

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Calculate paginated events
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentEvents = events.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on page change
  };

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
            size="2xl"
            color="blue"
            variant="border"
            label="Loading page..."
          />
        </motion.div>
      ) : (
        <>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentEvents.map((event) => (
              <Link key={event.id} to={`/events/eventdetail/${event.id}`}>
                <EventCard {...event} />
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      )}
    </PageAnimation>
  );
};

export default EventList;
