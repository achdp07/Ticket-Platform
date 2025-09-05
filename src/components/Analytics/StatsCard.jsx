import React from "react";

const StatsCard = ({ title, amount, icon: Icon }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow flex items-center space-x-4">
      <Icon className="h-8 w-8 text-blue-600" /> {/* ✅ use passed icon */}
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-bold">{amount}</p>
      </div>
    </div>
  );
};

export default StatsCard;
