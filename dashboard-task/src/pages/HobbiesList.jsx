export default function HobbiesList() {
  const hobbies = ["Coding", "Cricket", "Gaming", "Traveling", "Reading"];

  return (
    <div className="flex-1 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Hobbies</h1>

      <div className="bg-white shadow-lg rounded-xl p-6 w-96">
        <ul className="space-y-3">
          {hobbies.map((hobby, i) => (
            <li
              key={i}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm"
            >
              {hobby}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
