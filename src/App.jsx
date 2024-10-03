import React from "react";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import UserList from "./components/UserList";
import Form from "./components/Forms";

function App() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-10">React Demo App</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Counter title="Counter Component" />
        <Timer />
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <UserList />
        <Form />
      </div>
    </div>
  );
}

export default App;
