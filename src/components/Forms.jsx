import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-purple-200 rounded-lg shadow-md"
    >
      <label className="block mb-2 text-xl">Enter your name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full mb-4"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
