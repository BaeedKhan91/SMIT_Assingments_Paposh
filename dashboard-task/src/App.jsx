import Sidebar from "./Components/Sidebar";
import ProfileCard from "./pages/ProfileCard";
import HobbiesList from "./pages/HobbiesList";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(true);
  const hobbies = ["Coding", "Cricket", "Gaming", "Traveling", "Reading"];

  return (
    <div className={`${theme} flex relative`}>
      <Sidebar theme={theme} setTheme={setTheme}/>
     

      <Routes>
        <Route path="/dashboard" element={<ProfileCard />} />
        <Route path="/hobbies" element={<HobbiesList hobbies={hobbies} />} />
      </Routes>
    </div>
  );
}
