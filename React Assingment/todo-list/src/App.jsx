import { useState } from "react";

import { Search, Edit2, Trash2, Moon, Plus } from "lucide-react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Task# 1", isdone: false },
    { id: 2, text: "Task# 2", isdone: true },
    { id: 3, text: "Task# 3", isdone: false },
  ]);
  const [showPopup, setShowPopup] = useState(false);
  const [theme, setTheme] = useState(false);
  const [editedId, setEditedId] = useState("");
  const [newTodo, setNewTodo] = useState("");
  const [searchTodo, setSearchTodo] = useState("");
  function handleAddTodo() {
    setShowPopup(true);
  }

  function handleInput(e) {
    const value = e.target.value;
    setNewTodo(value);
  }

  function handleApply() {
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

  function handleTheme() {
    setTheme(!theme);
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
    // console.log(e.target);

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isdone: !todo.isdone } : todo
      )
    );
  }
  let filterdTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTodo.toLowerCase())
  );

  function handleSelect(e){
    console.log(e.target.value);

                      
    
  }

  let color = "text-purple-500";
  let darkColor = "text-gray-900";
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900  transition">
      <div className=" mx-auto mt-10  w-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 relative border border-purple-200 pb-20">
        <h1 className="text-center text-xl font-semibold mb-4 dark:text-white">
          TODO <span className={theme ? color : darkColor}>LIST</span>
        </h1>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center w-full border border-purple-300 rounded-lg px-3 py-2">
            <input
              type="text"
              placeholder="Search note..."
              className="w-full bg-transparent outline-none text-sm dark:text-gray-200"
              value={searchTodo}
              onChange={(e) => setSearchTodo(e.target.value)}
            />
            <Search size={18} className="text-purple-500" />
          </div>

           <select onChange={handleSelect} className="bg-purple-500 text-white rounded-lg px-2 py-1 text-sm cursor-pointer hover:bg-purple-600 transition">
            <option>ALL</option>
            <option>Active</option>
            <option>Done</option>
          </select>
        </div>

        {/* Todo items */}
        {/* 🌟 Popup Window */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-10">
            <div className="bg-white p-7 shadow-lg w-[500px] rounded-2xl">
              <h2 className="text-lg font-semibold mb-3 text-center">
                Add New Todo
              </h2>

              <input
                type="text"
                placeholder="Enter todo..."
                value={newTodo}
                onChange={handleInput}
                className="border w-full p-2 mb-3 rounded outline-none"
              />

              <div className="flex justify-between mt-5">
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-white text-purple-500 px-[22px] py-[8px] rounded border border-purple-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApply}
                  className="bg-purple-500 text-white px-[22px] py-[8px] rounded"
                >
                  {editedId ? "Edit" : "Apply"}
                </button>
              </div>
            </div>
          </div>
        )}
        <ul className="space-y-3">
          {filterdTodos.map((todo) => (
            <li
              key={todo.id}
              className={`flex items-center justify-between border-b border-purple-200 pb-2`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.isdone}
                  className="w-4 h-4 accent-purple-500 cursor-pointer"
                  onChange={() => handleToggle(todo.id)}
                />
                <span
                  className={`text-sm font-semibold ${
                    todo.isdone
                      ? "line-through text-gray-400"
                      : "text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <div className="flex gap-2 text-purple-500">
                <Edit2
                  size={15}
                  className="cursor-pointer"
                  onClick={() => handleEdit(todo.id)}
                />
                <Trash2
                  size={15}
                  className="cursor-pointer"
                  onClick={() => handleDelete(todo.id)}
                />
              </div>
            </li>
          ))}
        </ul>

        {/* Floating add button */}
        <button
          className="absolute bottom-4 right-4 bg-purple-500 hover:bg-purple-600 hover:scale-110 text-white p-4 rounded-full shadow-md transition-all duration-300"
          // onClick={handleAddTodo}
          onClick={handleAddTodo}
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}

export default App;
