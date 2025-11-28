import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-gray-900 text-white h-screen p-5 pt-8 duration-300 shadow-lg ${
        open ? "w-60" : "w-20"
      }`}
    >
      <button
        className="text-white text-2xl absolute left-4 top-6 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <h1 className="text-2xl font-bold tracking-wide mt-10 mb-6">Dashboard</h1>
      )}

      <ul className="space-y-3 mt-5">
        <Link to="/dashboard">
          <li className="p-3 hover:bg-gray-700 rounded-lg cursor-pointer flex items-center gap-3">
            <span className="bg-gray-800 px-3 py-1 rounded">P</span>
            {open && <span className="text-md">Profile</span>}
          </li>
        </Link>

        <Link to="/hobbies">
          <li className="p-3 hover:bg-gray-700 rounded-lg cursor-pointer flex items-center gap-3">
            <span className="bg-gray-800 px-3 py-1 rounded">H</span>
            {open && <span className="text-md">Hobbies</span>}
          </li>
        </Link>
      </ul>
    </div>
  );
}
