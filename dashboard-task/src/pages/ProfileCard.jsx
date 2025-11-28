import { Routes } from "react-router-dom";
import Profile from "../Components/Profile";
import { useState } from "react";
import Followers from "../Components/Followers";

export default function ProfileCard() {
  const [subPart,setSubPart] = useState("profile")
  return (
    <div className="flex-1  min-h-screen p-6">
      <div className="relative w-full h-64 rounded-xl shadow-md bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-90px]">
          <div className="w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
            <img
              src="./src/assets/images/profile.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h1 className="text-2xl font-bold">Baeed Khan</h1>
        <p className="text-gray-600">Frontend WebDeveloper</p>

       

        <div className="flex justify-center gap-10 mt-8 border-b pb-3">
          <button onClick={()=> setSubPart("profile")} className="flex items-center gap-2 text-blue-600 font-medium">
            <span>📄</span> Profile
          </button>

          <button onClick={()=> setSubPart("Followers")} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <span>💙</span> Followers
          </button>

          <button onClick={()=> setSubPart("Friends")} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <span>👥</span> Friends
          </button>

          
        </div>
      </div>
      
      {subPart === "profile" ? <Profile/> : <Followers/>}
     {/* <Profile/> */}
    </div>
  );
}
