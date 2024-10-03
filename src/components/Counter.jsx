import React, { useState } from "react";

const Counter = ({ title }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);

  return (
    <div className="p-4 bg-blue-200 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-xl">Current Count: {count}</p>
      <button
        onClick={handleIncrement}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
