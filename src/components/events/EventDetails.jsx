import { useParams, useNavigate } from "react-router-dom";
import { events } from "./Events"; // ✅ make sure path is correct
import EventCard from "./EventCard"; 
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Clock, DollarSign, ArrowLeft } from "lucide-react";
import Checkout from "../booking/Checkout";
import { useState } from "react"; 



const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id)); // ✅ find correct event
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  if (!event) {
    return <div className="p-6 text-center text-red-500">Event not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-14">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 right-4 z-10 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Event image */}
        <img
          src={event.EventImg}
          alt={event.EventTitle}
          className="w-full h-80 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
          <h1 className="text-3xl font-bold text-white">{event.EventTitle}</h1>
          <p className="text-sm text-gray-200 flex items-center gap-2">
            <CalendarDays size={16} /> {event.EventDate}
          </p>
        </div>
      </div>


      {/* Layout */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">About this event</h2>
            <p className="text-slate-600 mt-2">
              {event.description || "No description provided yet."}
            </p>
          </section>
        </div>

        {/* Right Column */}
        <aside className="bg-white shadow rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin size={18} /> {event.EventLoc}
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Clock size={18} /> {event.EventDate}
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <DollarSign size={18} /> {event.EventPrice}
          </div>
          {/* Ticket button opens checkout modal */}
          <button
            onClick={() => setCheckoutOpen(true)}
            className="block w-full bg-blue-600 text-white rounded-lg py-2 mt-4 hover:bg-blue-700 transition"
          >
            Get Tickets
          </button>

          {/* Checkout Modal */}
          {isCheckoutOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
                <button
                  onClick={() => setCheckoutOpen(false)}
                  className="absolute top-3 right-3 text-slate-600 hover:text-slate-900"
                >
                  ✕
                </button>
                <Checkout event={event} /> {/* reuse your existing Checkout component */}
              </div>
            </div>
          )}


        </aside>
      </div>

      {/* Related Events */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Related Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events
            .filter((e) => e.id !== event.id)
            .slice(0, 3)
            .map((related) => (
              <EventCard key={related.id} {...related} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
