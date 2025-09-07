import React from "react";
import { Users, Building2, Ticket, CreditCard } from "lucide-react";
import { Card, CardContent } from "../../ui/Card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Ticket Sales", value: 400 },
  { name: "Refunds", value: 100 },
  { name: "Pending", value: 80 },
];

const COLORS = ["#2563eb", "#e11d48", "#f59e0b"];

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Users size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Total Users</p>
              <p className="text-xl font-semibold">12,430</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-xl">
              <Building2 size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Organizers</p>
              <p className="text-xl font-semibold">230</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <Ticket size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Active Events</p>
              <p className="text-xl font-semibold">540</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-pink-100 text-pink-600 rounded-xl">
              <CreditCard size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Revenue</p>
              <p className="text-xl font-semibold">$85,430</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart + Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Breakdown Chart */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Revenue Breakdown</h2>
            <div className="h-64">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <ul className="space-y-3">
              <li className="text-sm text-slate-600">
                ✅ New organizer <span className="font-semibold">"LiveNation"</span> approved.
              </li>
              <li className="text-sm text-slate-600">
                🎟️ Event <span className="font-semibold">"Summer Fest 2025"</span> reported for review.
              </li>
              <li className="text-sm text-slate-600">
                💳 Refund of <span className="font-semibold">$120</span> issued to user <span className="font-semibold">#4930</span>.
              </li>
              <li className="text-sm text-slate-600">
                👤 User <span className="font-semibold">Sarah M.</span> registered.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
