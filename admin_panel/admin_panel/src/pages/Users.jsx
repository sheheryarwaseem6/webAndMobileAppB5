import { useState } from "react";

const allUsers = [
  { id: 1, name: 'User 1', email: 'user1@gmail.com', number: '1234567890', blocked: false },
  { id: 2, name: 'User 2', email: 'user2@gmail.com', number: '1234567890', blocked: false },
  { id: 3, name: 'User 3', email: 'user3@gmail.com', number: '1234567890', blocked: false },
  { id: 4, name: 'User 4', email: 'user4@gmail.com', number: '1234567890', blocked: false },
  { id: 5, name: 'User 5', email: 'user5@gmail.com', number: '1234567890', blocked: false },
  { id: 6, name: 'User 6', email: 'user6@gmail.com', number: '1234567890', blocked: false },
];

function Users() {
  const [users, setUsers] = useState(allUsers);

  const toggleBlock = (id) => {
    const updated = users.map(user =>
      user.id === id ? { ...user, blocked: !user.blocked } : user
    );
    setUsers(updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="w-full border-collapse bg-white rounded shadow-md">
        <thead>
          <tr className="bg-gray-800 text-left text-white">
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Number</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="border-t border-gray-800">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.number}</td>
              <td className="p-3">
                <button
                  onClick={() => toggleBlock(user.id)}
                  className={`w-20 py-1 rounded text-white cursor-pointer ${user.blocked ? 'bg-red-600' : 'bg-gray-800'
                    }`}
                >
                  {user.blocked ? 'Unblock' : 'Block'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;