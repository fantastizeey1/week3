import React, { useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);
  const [newUser, setNewUser] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (newUser.trim()) {
      setUsers([...users, newUser.trim()]);
      setNewUser("");
    }
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 bg-yellow-200 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <form onSubmit={addUser} className="mb-4">
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
          placeholder="Enter new user name"
          className="p-2 border rounded mr-2"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
      <ul className="list-disc pl-6">
        {users.map((user, index) => (
          <li key={index} className="mb-2">
            {user}
            <button
              onClick={() => deleteUser(index)}
              className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
