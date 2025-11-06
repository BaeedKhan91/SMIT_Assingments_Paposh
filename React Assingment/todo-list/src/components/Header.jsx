import React from "react";
import { Search } from "lucide-react";

function Header({searchTodo , setSearchTodo , handleSelect , options }) {
  return (
    <>
      <h1 className="text-center text-xl font-semibold mb-4 ">
        TODO <span className="text-[#6c63ff]">LIST</span>
      </h1>

      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center w-full border border-[#6b63ff62] rounded-lg px-3 py-2">
          <input
            type="text"
            placeholder="Search todo..."
            className="w-full bg-transparent outline-none text-sm "
            value={searchTodo}
            onChange={(e) => setSearchTodo(e.target.value)}
          />
          <Search size={18} className="text-[#6c63ff]" />
        </div>

        <select
          onChange={handleSelect}
          value={options}
          className="bg-[#6c63ff] text-white rounded-lg px-2 py-1 text-sm cursor-pointer hover:[#6c63ff] transition"
        >
          <option>ALL</option>
          <option>Active</option>
          <option>Done</option>
        </select>
      </div>
    </>
  );
}

export default Header;
