import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar({theme ,setTheme}) {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`bg-(--bg-sidebar) font-bold  text-(--text-main) border-r border-(--text-secondary) h-screen p-5 pt-8 duration-300 shadow-lg ${
        open ? "w-60" : "w-20"
      }`}
    >
      <div className={`flex justify-between items-center ${!open ? "flex-col gap-3" :""}`}>
        <button
          className="text-(--text-main) text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <button
          onClick={() => setTheme(!theme)}
          className="cursor-pointer rounded-full bg-(--bg-card) p-2"
        >
           {theme === true ? "🌙" : "☀️"} 
        </button>
      </div>

      {open && (
        <h1 className="text-2xl font-bold tracking-wide mt-10 mb-6">
          Dashboard
        </h1>
      )}

      <ul className="space-y-3 mt-5">
        <Link to="/dashboard">
          <li className={` ${open ? "border-[0.5px]   border-(--text-secondary)" :""} p-3 hover:bg-(--bg-card) rounded-lg cursor-pointer flex items-center gap-3`}>
            
            {open && <span className="text-md">Profile</span>}
          </li>
        </Link>

        <Link to="/hobbies">
          <li className={`p-3  ${open ? "border-[0.5px] mt-2  border-(--text-secondary)" :""} hover:bg-(--bg-card) rounded-lg cursor-pointer flex items-center gap-3`}>

            {open && <span className="text-md">Hobbies</span>}
          </li>
        </Link>
      </ul>
    </div>
  );
}
