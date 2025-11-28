export default function ProfileCard() {
  return (
    <div className="flex-1 p-10 bg-gray-100 min-h-screen">
      {/* Banner */}
      <div className="w-full h-48 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md"></div>

      {/* Profile */}
      <div className="bg-white shadow-lg rounded-xl p-6 mt-[-40px] w-80 mx-auto text-center">
        <img
          src="https://via.placeholder.com/100"
          className="w-28 h-28 rounded-full mx-auto border-4 border-white shadow-md"
        />

        <h2 className="text-xl font-bold mt-3">John Doe</h2>
        <p className="text-gray-600">Frontend Developer</p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-5">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow">
            About
          </button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow">
            Followers
          </button>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
