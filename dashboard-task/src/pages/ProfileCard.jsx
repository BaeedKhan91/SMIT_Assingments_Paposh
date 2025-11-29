import { useState } from "react";
import Profile from "../Components/Profile";
import Followers from "../Components/Followers";

export default function ProfileCard() {
  const [subPart, setSubPart] = useState("profile");

  return (
    <div className="flex-1 min-h-screen p-6 bg-(--bg-main) text-(--text-main)">
      <div
        className=" mt-8 relative w-full h-64 rounded-xl shadow-md bg-cover bg-center"
        style={{ backgroundImage: "url('./images/banner.png')" }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-90px]">
          <div className="w-48 h-48 rounded-full border-4 border-(--bg-card) shadow-xl overflow-hidden bg-(--bg-card)">
            <img
              src="./images/profile.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h1 className="text-2xl font-bold">Baeed Khan</h1>
        <p className="text-(--text-secondary)">Frontend WebDeveloper</p>
        <p className="text-(--text-secondary)">baeedk7@gmail.com</p>

        <div className="flex justify-center gap-10 mt-8 border-b pb-3 border-(--text-secondary)">
          <button
            onClick={() => setSubPart("profile")}
            className={`flex items-center gap-2 ${
              subPart === "profile"
                ? "text-(--accent)"
                : "text-(--text-secondary)"
            } hover:text-(--accent) font-medium`}
          >
            <span>📄</span> Profile
          </button>

          <button
            onClick={() => setSubPart("Followers")}
            className={`flex items-center gap-2 ${
              subPart === "Followers"
                ? "text-(--accent)"
                : "text-(--text-secondary)"
            } hover:text-(--accent)`}
          >
            <span>💙</span> Followers
          </button>
        </div>
      </div>

      {subPart === "profile" ? <Profile /> : <Followers />}
    </div>
  );
}
