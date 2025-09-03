import { Link } from "react-router-dom";
import { FaLocationArrow } from 'react-icons/fa';
import { MdCategory, MdDateRange, MdPriceChange } from "react-icons/md";

const EventCard = ({ EventTitle, EventLoc, EventDate, EventImg, EventPrice, id, EventCategory }) => {
  return (
    <Link to={`/events/${id}`}>
      <div
        className="bg-gray-800 rounded-xl shadow p-4
        w-full max-w-sm
        sm:max-w-md
        md:max-w-lg
        lg:max-w-xl 
        hover:bg-gray-950 
        duration-200 transition cursor-pointer"
      >
        <img src={EventImg} alt={EventTitle} className="rounded mb-2" />
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h2 className="font-bold mb-1">{EventTitle}</h2>
            <div className="flex">
              <MdDateRange className="mr-1 text-blue-600" />
              <span className="text-gray-400 text-sm">{EventDate}</span>
            </div>
          </div>

          <div>
            <FaLocationArrow className="inline mr-1 text-blue-600" />
            <span className="text-gray-400">{EventLoc}</span>
          </div>

          <div>
            <MdPriceChange className="inline mr-1 text-blue-600" />
            <span className="text-gray-400">{EventPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
