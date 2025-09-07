import React, { useState } from "react";
import { Card, CardContent } from "../../ui/Card";
import { Search, UserMinus, UserCheck } from "lucide-react";
import Modal from "../../ui/Modal";

const Users = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: "Sarah M.", email: "sarah@example.com", role: "User", status: "Active", joined: "2025-01-12", tickets: 5 },
    { id: 2, name: "John D.", email: "john@example.com", role: "Organizer", status: "Suspended", joined: "2024-11-03", tickets: 12 },
    { id: 3, name: "Mariam A.", email: "mariam@example.com", role: "User", status: "Active", joined: "2025-02-20", tickets: 2 },
    { id: 4, name: "Alex T.", email: "alex@example.com", role: "User", status: "Pending", joined: "2025-03-15", tickets: 0 },
  ];

  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-green-100 text-green-600 rounded-xl">
              <UserCheck size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Active Users</p>
              <p className="text-xl font-semibold">10,230</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <UserMinus size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">Suspended</p>
              <p className="text-xl font-semibold">120</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <Search size={20} />
            </div>
            <div>
              <p className="text-sm text-slate-500">New Signups (30d)</p>
              <p className="text-xl font-semibold">540</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search bar */}
      <Card>
        <CardContent className="p-4 flex items-center gap-3">
          <input
            type="text"
            placeholder="Search users..."
            className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Search
          </button>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardContent className="p-4 overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="px-4 py-2 font-medium">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td
                    className={`px-4 py-2 font-medium ${
                      user.status === "Active"
                        ? "text-green-600"
                        : user.status === "Suspended"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {user.status}
                  </td>
                  <td className="px-4 py-2 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedUser(user);
                      }}
                      className="px-3 py-1 text-xs rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* User Detail Modal */}
      <Modal
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        title="User Details"
      >
        {selectedUser && (
          <div className="space-y-3">
            <p><span className="font-semibold">Name:</span> {selectedUser.name}</p>
            <p><span className="font-semibold">Email:</span> {selectedUser.email}</p>
            <p><span className="font-semibold">Role:</span> {selectedUser.role}</p>
            <p><span className="font-semibold">Status:</span> {selectedUser.status}</p>
            <p><span className="font-semibold">Joined:</span> {selectedUser.joined}</p>
            <p><span className="font-semibold">Tickets Purchased:</span> {selectedUser.tickets}</p>

            <div className="flex justify-end gap-2 pt-4">
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Suspend
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Approve
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Users;
