"use client";

import { useEffect, useState } from "react";

export default function AdminContactPage() {
  const [messages, setMessages] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchMessages = async () => {
    const res = await fetch(
      "http://localhost/himalayanthakali_backend/contacts/get-contacts.php"
    );
    const data = await res.json();
    setMessages(data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const deleteMessage = async (id) => {
    if (!confirm("Delete this message?")) return;

    await fetch(
      "http://localhost/himalayanthakali_backend/contacts/delete-contact.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      }
    );

    fetchMessages();
  };

  const saveEdit = async () => {
    await fetch(
      "http://localhost/himalayanthakali_backend/contacts/update-contact.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing),
      }
    );

    setEditing(null);
    fetchMessages();
  };

  return (
    <div className="min-h-screen bg-gray-100 ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Contact Messages
      </h1>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-200 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr
                key={msg.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-4 py-3">
                  {msg.full_name}
                </td>
                <td className="px-4 py-3">
                  {msg.email}
                </td>
                <td className="px-4 py-3">
                  {msg.phone}
                </td>
                <td className="px-4 py-3 max-w-xs truncate">
                  {msg.message}
                </td>
                <td className="px-4 py-2 text-xs text-gray-500">
                  {new Date(msg.created_at).toLocaleString()}
                </td>
                <td className="px-4 py-2 flex gap-2 justify-center">
                  <button
                    onClick={() => setEditing(msg)}
                    className="px-3 py-1 text-xs bg-blue-500 text-white  hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteMessage(msg.id)}
                    className="px-3 py-1 text-xs bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* EDIT MODAL */}
      {editing && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">
              Edit Message
            </h2>

            <div className="space-y-3">
              <input
                className="w-full border rounded px-3 py-2"
                value={editing.full_name}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    full_name: e.target.value,
                  })
                }
              />

              <input
                className="w-full border rounded px-3 py-2"
                value={editing.email}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    email: e.target.value,
                  })
                }
              />

              <input
                className="w-full border rounded px-3 py-2"
                value={editing.phone}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    phone: e.target.value,
                  })
                }
              />

              <textarea
                rows={4}
                className="w-full border rounded px-3 py-2"
                value={editing.message}
                onChange={(e) =>
                  setEditing({
                    ...editing,
                    message: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setEditing(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
