import React from "react";
import { Edit, Trash2, Eye } from "lucide-react";
import PageAnimation from "../../ui/PageAnimation";

const dummyProjects = [
  {
    id: 1,
    name: "Summer Music Festival",
    date: "2025-09-20",
    venue: "City Park",
    status: "Published",
    ticketsSold: 120,
    revenue: 3600,
  },
  {
    id: 2,
    name: "Tech Conference 2025",
    date: "2025-10-05",
    venue: "Convention Center",
    status: "Draft",
    ticketsSold: 0,
    revenue: 0,
  },
  {
    id: 3,
    name: "Charity Gala",
    date: "2025-11-12",
    venue: "Grand Hall",
    status: "Published",
    ticketsSold: 75,
    revenue: 2250,
  },
];

const Projects = () => {
  return (
    <PageAnimation>
    <div className="flex flex-col gap-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-xl shadow flex flex-col">
          <p className="text-sm text-gray-500">Total Projects</p>
          <p className="text-2xl font-bold">{dummyProjects.length}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow flex flex-col">
          <p className="text-sm text-gray-500">Published</p>
          <p className="text-2xl font-bold">{dummyProjects.filter(p => p.status === "Published").length}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow flex flex-col">
          <p className="text-sm text-gray-500">Drafts</p>
          <p className="text-2xl font-bold">{dummyProjects.filter(p => p.status === "Draft").length}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow flex flex-col">
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="text-2xl font-bold">
            ${dummyProjects.reduce((sum, p) => sum + p.revenue, 0)}
          </p>
        </div>
      </div>

      {/* Search / Filter */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search projects..."
          className="p-2 border rounded-lg w-64"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          + Create Project
        </button>
      </div>

      {/* Projects Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Venue</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Tickets Sold</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Revenue</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dummyProjects.map(project => (
              <tr key={project.id}>
                <td className="px-4 py-2">{project.name}</td>
                <td className="px-4 py-2">{project.date}</td>
                <td className="px-4 py-2">{project.venue}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Published" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-2">{project.ticketsSold}</td>
                <td className="px-4 py-2">${project.revenue}</td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button className="p-1 hover:bg-gray-100 rounded"><Eye size={16} /></button>
                  <button className="p-1 hover:bg-gray-100 rounded"><Edit size={16} /></button>
                  <button className="p-1 hover:bg-gray-100 rounded"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </PageAnimation>
  );
};

export default Projects;
