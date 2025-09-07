import {
  Dumbbell,
  Mic,
  Users,
  PartyPopper,
  Palette,
  Laptop,
} from "lucide-react";

const Category = [
  { id: 1, name: "Sport", icon: Dumbbell },
  { id: 2, name: "Conference", icon: Mic },
  { id: 3, name: "Meetup", icon: Users },
  { id: 4, name: "Party", icon: PartyPopper },
  { id: 5, name: "Art & Culture", icon: Palette },
  { id: 6, name: "Technologies", icon: Laptop },
];

const Dates = [
  "Today",
  "Tomorrow",
  "This Weekend",
  "This Week",
  "This Month",
  "Next Month",
];

const Organizer = [
  {
    id: 1,
    name: "Organizer 1",
    img: "https://fastly.picsum.photos/id/680/200/200.jpg?hmac=jlYrp1rK5RIQZTIaHkTW2llzrRXtuYJLeprOC8i40os",
  },
  { id: 2, name: "Organizer 2", img: "https://picsum.photos/200" },
  { id: 3, name: "Organizer 3", img: "https://picsum.photos/200" },
  { id: 4, name: "Organizer 4", img: "https://picsum.photos/200" },
];

const Filters = () => {
  return (
    <div className="overflow-hidden h-auto">
      {/* Category */}
      <h4 className="text-slate-900 font-semibold mt-4 mb-3">Category</h4>
      <div className="
      grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 mb-6">
        {Category.map((cat) => (
          <span
            key={cat.id}
            className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-slate-900
             hover:bg-blue-600 hover:text-white transition
             bg-white shadow-md "
          >
            <cat.icon size={16} className="text-blue-600 " />
            {cat.name}
          </span>
        ))}
      </div>
      <div className="border-t border-slate-200" />

      {/* Organizer */}
      <h4 className="text-slate-900 font-semibold mt-6 mb-3">Organizer</h4>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 mb-6">
        {Organizer.map((org) => (
          <div
            key={org.id}
            className="flex items-center gap-2 hover:bg-blue-600
            bg-white shadow-md
            hover:text-white p-1 rounded-full transition"
          >
            <img
              src={org.img}
              alt={org.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm">{org.name}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200" />

      {/* Date */}
      <h4 className="text-slate-900 font-semibold mt-6 mb-3">Date</h4>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 mb-6">
        {Dates.map((date, idx) => (
          <span
            key={idx}
            className=" px-3 py-2 rounded-full text-center text-sm text-slate-600
             hover:bg-blue-600 hover:text-white transition
             bg-white shadow-md"
          >
            {date}
          </span>
        ))}
      </div>
      <div className="border-t sm:border-hidden border-slate-200" />
    </div>
  );
};

export default Filters;
