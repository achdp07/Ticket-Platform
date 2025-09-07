import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import { events } from "./Events";

const EventList = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Link key={event.id} to={`/events/eventdetail/${event.id}`}>
          <EventCard {...event} /> {/* spread props into EventCard */}
        </Link>
      ))}
    </div>
  );
};

export default EventList;