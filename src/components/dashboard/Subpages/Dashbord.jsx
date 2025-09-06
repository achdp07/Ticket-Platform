import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from "recharts";
import StatsCard from '../../Analytics/StatsCard'
import { CalendarDays, Clock, DollarSign, LayoutDashboard, Plus, Projector, ProportionsIcon, 
  ScanLine, 
  ShieldHalf, 
  User} from 'lucide-react'


const Analytics = [
  {
    title: "Total Events",
    amount: "34",
    icon: CalendarDays
  },

  {
    title: "Total Attendees",
    amount: "1,200",
    icon: User
  },

  {
    title: "Total Revenue",
    amount: "$45,000",
    icon: DollarSign
  },

  {
    title: "Pending Transactions",
    amount: "$5,000",
    icon: Clock
  }
]

const data = [
  { day: 'Mon', tickets: 30 },
  { day: 'Tue', tickets: 45 },
  { day: 'Wed', tickets: 20 },
  { day: 'Thu', tickets: 50 },
  { day: 'Fri', tickets: 70 },
              ];

const revenueData = [
  { name: "Tech Summit 2025", value: 18000 },
  { name: "Music Fest", value: 12000 },
  { name: "Startup Expo", value: 8000 },
  { name: "Art Gala", value: 7000 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const Dashbord = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
        overflow-y-scroll hide-scrollbar'>
            {/* Your organizer dashboard content */}
            {Analytics.map((stat) => (
              <StatsCard 
                key={stat.title}
                title={stat.title}
                amount={stat.amount}
                icon={stat.icon}
              />
            ))}
          </div>

          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
              {/* Ticket Sales Trend */}

              <div className="bg-white rounded-xl shadow p-4">
                <h2 className="text-lg font-semibold mb-4">Ticket Sales Trend</h2>
                {/* Chart goes here */}
                <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="tickets" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Revenue Breakdown */}
              <div className="bg-white rounded-xl shadow p-4">
                <h2 className="text-lg font-semibold mb-4">Revenue Breakdown</h2>
                {/* Chart goes here */}
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={revenueData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      label
                    >
                      {revenueData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Upcoming Events Table */}
              <div className="bg-white rounded-xl shadow p-4 mt-2 col-span-1 md:col-span-2 lg:col-span-2">
                  <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500">
                        <th className="p-2">Event</th>
                        <th className="p-2">Date</th>
                        <th className="p-2">Venue</th>
                        <th className="p-2">Tickets Sold</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="p-2">Tech Summit 2025</td>
                        <td className="p-2">Sep 20</td>
                        <td className="p-2">Kigali Arena</td>
                        <td className="p-2">340/500</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Music Fest</td>
                        <td className="p-2">Oct 5</td>
                        <td className="p-2">Amahoro Stadium</td>
                        <td className="p-2">1200/2000</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Startup Expo</td>
                        <td className="p-2">Nov 15</td>
                        <td className="p-2">Kigali Convention Center</td>
                        <td className="p-2">450/600</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Art Gala</td>
                        <td className="p-2">Dec 1</td>
                        <td className="p-2">Inema Arts Center</td>
                        <td className="p-2">150/200</td>
                      </tr>
                      <tr className="border-t">
                        <td className="p-2">Health & Wellness Fair</td>
                        <td className="p-2">Dec 10</td>
                        <td className="p-2">Kigali Exhibition Grounds</td>
                        <td className="p-2">300/400</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
            </div>

          </div>
    </div>
  )
}

export default Dashbord