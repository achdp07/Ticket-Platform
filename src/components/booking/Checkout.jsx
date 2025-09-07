import { useParams } from "react-router-dom";
import { events } from "../events/Events";

const Checkout = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) return <p>Event not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-xl font-semibold">{event.EventTitle}</h2>
        <p className="text-slate-600">{event.EventLoc} — {event.EventDate}</p>
        <p className="font-medium mt-2">{event.EventPrice}</p>

        {/* Payment form placeholder */}
        <button className="w-full bg-green-600 text-white rounded-lg py-2 mt-4 hover:bg-green-700">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
