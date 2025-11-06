import React from 'react'
import { Search, Edit2, Trash2, Moon, Plus } from "lucide-react";

function TodoItem({todo, handleToggle,handleEdit,handleDelete }) {
  return (
     <li
              key={todo.id}
              className={`flex items-center justify-between border-b border-purple-200 pb-2`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.isdone}
                  className="w-4 h-4 accent-[#6c63ff] cursor-pointer"
                  onChange={() => handleToggle(todo.id)}
                />
                <span
                  className={`text-sm font-semibold ${
                    todo.isdone
                      ? "line-through text-gray-400"
                      : "text-gray-800 100"
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <div className="flex gap-2 text-[#6c63ff]">
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
  )
}

export default TodoItem