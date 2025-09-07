import { X } from "lucide-react";

export default function CheckoutModal({ event, isOpen, onClose }) {
  if (!isOpen) return null; // don’t render if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-slate-600 hover:text-slate-900"
        >
          <X size={20}/>
        </button>

        <h1 className="text-2xl font-bold mb-4">Checkout</h1>

        {/* Event details */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">{event.EventTitle}</h2>
          <p className="text-slate-600">{event.EventLoc} — {event.EventDate}</p>
          <p className="font-medium mt-2">{event.EventPrice}</p>
        </div>

        {/* Payment form placeholder */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name on card"
            className="w-full border rounded-lg px-3 py-2"
          />
          <input
            type="text"
            placeholder="Card number"
            className="w-full border rounded-lg px-3 py-2"
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="CVC"
              className="w-1/2 border rounded-lg px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
}
