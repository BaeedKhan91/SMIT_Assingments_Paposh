import { useState } from "react";

import TodoList from "./components/TodoList";
import Popup from "./components/Popup";
import Header from "./components/header";
import Add from "./components/Add";

function App() {
  const [todos, setTodos] = useState([

  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [editedId, setEditedId] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [searchTodo, setSearchTodo] = useState("");
  const [options, setOptions] = useState("All");


  function handleAddTodo() {
    setShowPopup(true);
  }

  function handleInput(e) {
    const value = e.target.value;
    setNewTodo(value);
  }

  function handleApply() {
    if (newTodo.trim() === "") return;
    if (editedId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editedId ? { ...todo, text: newTodo } : todo
        )
      );
      setEditedId("");
    } else {
      setTodos([...todos, { id: Date.now(), text: newTodo, isdone: false }]);
    }

    setNewTodo("");
    setShowPopup(false);
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleEdit(id) {
    const editTodo = todos.find((todo) => todo.id === id);
    setNewTodo(editTodo.text);
    setEditedId(id);
    setShowPopup(true);
  }
  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
      )
    );
  }
  let filterdTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTodo.toLowerCase())
  );

  if (options === "Active") {
    filterdTodos = filterdTodos.filter((todo) => !todo.isdone);
  } else if (options === "Done") {
    filterdTodos = filterdTodos.filter((todo) => todo.isdone);
  }

  function handleSelect(e) {
    setOptions(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300  transition">
      <div className=" mx-auto mt-10  w-[400px] bg-white rounded-2xl shadow-lg p-6 relative border border-purple-200 pb-20">
        <Header
          setSearchTodo={setSearchTodo}
          options={options}
          searchTodo={searchTodo}
          handleSelect={handleSelect}
        />

        {showPopup && (
          <Popup
            newTodo={newTodo}
            setShowPopup={setShowPopup}
            handleInput={handleInput}
            handleApply={handleApply}
            editedId={editedId}
          />
        )}
        <TodoList
          todos={filterdTodos}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleToggle={handleToggle}
        />

        <Add handleAddTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;
