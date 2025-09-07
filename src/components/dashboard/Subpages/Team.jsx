import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";
import PageAnimation from "../../ui/PageAnimation";

const dummyTeam = [
  {
    id: 1,
    name: "Ash Diop",
    role: "Admin",
    email: "ash@example.com",
    projects: 5,
    status: "Active",
  },
  {
    id: 2,
    name: "Lila Smith",
    role: "Organizer",
    email: "lila@example.com",
    projects: 3,
    status: "Active",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Volunteer",
    email: "john@example.com",
    projects: 2,
    status: "Inactive",
  },
];

const Team = () => {
  return (
    <PageAnimation>
    <div className="flex flex-col gap-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white rounded-xl shadow flex flex-col">
          <p className="text-sm text-gray-500">Total Members</p>
          <p className="text-2xl font-bold">{dummyTeam.length}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow flex flex-col">
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-2xl font-bold">{dummyTeam.filter(m => m.status === "Active").length}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow flex flex-col">
          <p className="text-sm text-gray-500">Inactive</p>
          <p className="text-2xl font-bold">{dummyTeam.filter(m => m.status === "Inactive").length}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow flex flex-col">
          <p className="text-sm text-gray-500">Total Projects</p>
          <p className="text-2xl font-bold">{dummyTeam.reduce((sum, m) => sum + m.projects, 0)}</p>
        </div>
      </div>

      {/* Search / Add Member */}
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Search team members..."
          className="p-2 border rounded-lg w-64"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          + Add Member
        </button>
      </div>

      {/* Team Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Role</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Projects</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dummyTeam.map(member => (
              <tr key={member.id}>
                <td className="px-4 py-2">{member.name}</td>
                <td className="px-4 py-2">{member.role}</td>
                <td className="px-4 py-2">{member.email}</td>
                <td className="px-4 py-2">{member.projects}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    member.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                  }`}>
                    {member.status}
                  </span>
                </td>
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

export default Team;
