import { FaLocationArrow } from "react-icons/fa";
import { MdDateRange, MdPriceChange } from "react-icons/md";

const EventCard = ({ EventTitle, EventLoc, EventDate, EventImg, EventPrice, EventCategory }) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden 
        hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full max-w-sm"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={EventImg}
          alt={EventTitle}
          className="w-full h-48 object-cover"
        />
        {EventCategory && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-lg shadow">
            {EventCategory}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title & Date */}
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-slate-800">{EventTitle}</h2>
          <div className="flex items-center text-sm text-slate-500">
            <MdDateRange className="mr-1 text-blue-600" />
            {EventDate}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-slate-500 text-sm">
          <FaLocationArrow className="mr-2 text-blue-600" />
          {EventLoc}
        </div>

        {/* Price */}
        <div className="flex items-center text-slate-500 text-sm">
          <MdPriceChange className="mr-2 text-blue-600" />
          {EventPrice}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
