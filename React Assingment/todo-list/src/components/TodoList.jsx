import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, handleToggle, handleEdit, handleDelete }) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
}

export default TodoList;
