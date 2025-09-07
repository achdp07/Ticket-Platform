import { CalendarFold, Locate, Ticket } from "lucide-react";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { MdDateRange, MdPriceChange } from "react-icons/md";

const EventCard = ({
  EventTitle,
  EventLoc,
  EventDate,
  EventImg,
  EventPrice,
  EventCategory,
  isFeatured, // optional flag for badge
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer 
      w-full max-w-sm shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with scale effect */}
      <img
        src={EventImg}
        alt={EventTitle}
        className={`w-full h-72 object-cover transition-transform duration-500 ${
          hovered ? "scale-105" : "scale-100"
        }`}
      />

      {/* Optional category / featured badge */}
      {(EventCategory || isFeatured) && (
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-lg shadow">
          {isFeatured ? "Featured" : EventCategory}
        </span>
      )}

      {/* Overlay dim layer */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Bottom hover panel */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-3/5 bg-white rounded-t-3xl p-4 flex flex-col transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        {/* Event Title */}
        <h2 className="text-lg font-bold text-gray-900">{EventTitle}</h2>

        {/* Date, Location, Price */}
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <CalendarFold className="mr-1 text-blue-600" />
          {EventDate}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Locate className="mr-1 text-blue-600" />
          {EventLoc}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Ticket className="mr-1 text-blue-600" />
          {EventPrice}
        </div>

        {/* Spacer */}
        <div className="mt-auto flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
