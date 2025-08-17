import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();

  // You can fetch event data by id here (API or mock data)
   const event = events.find(e => e.id === parseInt(id));

  return (
    <div className="p-8 text-gray-100">
      <h1 className="text-3xl font-bold">Event Detail for {id}</h1>
      <p>Here you display all information about this event.</p>
    </div>
  );
};

export default EventDetail;