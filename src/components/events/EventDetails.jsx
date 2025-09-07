import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();

    {events.map((event, index) => (
    <EventCard key={index} id={index + 1} {...event} />
  ))}

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img src={event.EventImg} alt={event.EventTitle} className="w-full h-80 object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
          <h1 className="text-3xl font-bold text-white">{event.EventTitle}</h1>
          <p className="text-sm text-gray-200 flex items-center gap-2">
            <CalendarDays size={16}/> {event.EventDate}
          </p>
        </div>
      </div>

      {/* Main layout */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-6">
          <section>
            <h2 className="text-xl font-semibold">About this event</h2>
            <p className="text-slate-600 mt-2">{event.description}</p>
          </section>

          <section>
            <h3 className="font-medium">Organizer</h3>
            <div className="flex items-center gap-3 mt-2">
              <img src={event.organizerImg} alt={event.organizer} className="w-10 h-10 rounded-full" />
              <span>{event.organizer}</span>
            </div>
          </section>
        </div>

        {/* Right column */}
        <aside className="bg-white shadow rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2 text-slate-700">
            <MapPin size={18}/> {event.EventLoc}
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <Clock size={18}/> {event.EventDate}
          </div>
          <div className="flex items-center gap-2 text-slate-700">
            <DollarSign size={18}/> {event.EventPrice}
          </div>
          <button className="w-full bg-blue-600 text-white rounded-lg py-2 mt-4 hover:bg-blue-700">
            Get Tickets
          </button>
        </aside>
      </div>

      {/* Related Events */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Related Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Map your EventCards here */}
        </div>
      </div>
    </div>

  );
};

export default EventDetail;