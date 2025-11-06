import React from 'react'
import {  Plus } from "lucide-react";
function Add({handleAddTodo}) {
  return (
     <button
          className="absolute bottom-4 right-4 bg-[#6c63ff] hover:[#4d44ff] hover:scale-110 text-white p-4 rounded-full shadow-md transition-all duration-300"
          // onClick={handleAddTodo}
          onClick={handleAddTodo}
        >
          <Plus size={18} />
        </button>
  )
}

export default Add