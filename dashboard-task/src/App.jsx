import Sidebar from "./Components/Sidebar";
import ProfileCard from "./pages/ProfileCard";
import HobbiesList from "./pages/HobbiesList";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />

      <Routes>
        <Route path="/dashboard" element={<ProfileCard />} />
        <Route path="/hobbies" element={<HobbiesList />} />
   
      </Routes>
    </div>
  );
}
