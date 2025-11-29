import { useEffect, useState } from "react";

export default function HobbiesList({ hobbies }) {
  const savedHobbies = JSON.parse(localStorage.getItem("hobbies"));
  const [hobbiesArr, setHobbiesArr] = useState(savedHobbies || hobbies);
  const [newHobby, setNewHobby] = useState("");

  useEffect(() => {
    localStorage.setItem("hobbies", JSON.stringify(hobbiesArr));
  }, [hobbiesArr]);
  const deleteHobby = (index) => {
    const updated = hobbiesArr.filter((_, i) => i !== index);
    setHobbiesArr(updated);
  };

  return (
    <div className="flex-1 p-10 bg-(--bg-main) min-h-screen text-(--text-main)">
      <h1 className="text-3xl font-bold mb-6">Hobbies</h1>

      <div className="flex gap-10">
        <div className="bg-(--bg-card) shadow-lg rounded-xl p-6 w-96">
          <ul className="space-y-3">
            {hobbiesArr.map((hobby, i) => (
              <li
                key={i}
                className="flex justify-between items-center p-3 bg-(--bg-main) hover:bg-(--bg-card) rounded-lg shadow-sm text-(--text-main)"
              >
                <span>{hobby}</span>
                <button
                  onClick={() => deleteHobby(i)}
                  className="text-red-500 font-bold hover:opacity-80 cursor-pointer"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Add a new hobby"
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
            className="p-3 rounded-lg border border-(--text-secondary) bg-(--bg-card) text-(--text-main) outline-none"
          />
          <button
            className="bg-(--accent) cursor-pointer text-white font-bold py-3 px-6 rounded-lg hover:opacity-90"
            onClick={() => {
              if (newHobby.trim() !== "") {
                setHobbiesArr([...hobbiesArr, newHobby]);
                setNewHobby("");
              }
            }}
          >
            Add Hobby
          </button>
        </div>
      </div>
    </div>
  );
}
