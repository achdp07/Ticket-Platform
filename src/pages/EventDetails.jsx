import React from "react";

const EventCard = ({ image, title, date, location, description }) => {
  return (
    <div className="">
      {/* Event Image */}
      <img className="" src={image} alt={title} />

      {/* Event Details */}
      <div className="p-5">
        <h2 className="">{title}</h2>
        <p className="">{date}</p>
        <p className="">{location}</p>
        <p className="">{description}</p>

        {/* Action Button */}
        <button className="mt-4 w-30 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
