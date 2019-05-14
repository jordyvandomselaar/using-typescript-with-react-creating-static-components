import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const App = () => {
  return (
    <div>
      <h1>Welcome to my to-do app.</h1>
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default App;
