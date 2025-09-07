import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent } from "../../ui/Card";

// Dummy Data
const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 27000 },
];

const ticketsData = [
  { month: "Jan", tickets: 500 },
  { month: "Feb", tickets: 800 },
  { month: "Mar", tickets: 650 },
  { month: "Apr", tickets: 1200 },
  { month: "May", tickets: 1600 },
];

const categoryData = [
  { name: "Concerts", value: 45 },
  { name: "Conferences", value: 25 },
  { name: "Workshops", value: 20 },
  { name: "Sports", value: 10 },
];

const COLORS = ["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"];

const Reports = () => {
  return (
    <div className="p-6 flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Reports & Analytics</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Total Revenue</p>
            <h3 className="text-xl font-bold">$94,000</h3>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Tickets Sold</p>
            <h3 className="text-xl font-bold">4,750</h3>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Active Events</p>
            <h3 className="text-xl font-bold">12</h3>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Attendee Growth</p>
            <h3 className="text-xl font-bold">+18%</h3>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Bar Chart */}
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-4 h-[350px]">
            <h3 className="font-semibold mb-4">Revenue Breakdown</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tickets Line Chart */}
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-4 h-[350px]">
            <h3 className="font-semibold mb-4">Ticket Sales Trends</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={ticketsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="tickets"
                  stroke="#10b981"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Pie Chart */}
        <Card className="shadow-lg rounded-2xl lg:col-span-2">
          <CardContent className="p-4 h-[400px]">
            <h3 className="font-semibold mb-4">Event Category Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  label
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
