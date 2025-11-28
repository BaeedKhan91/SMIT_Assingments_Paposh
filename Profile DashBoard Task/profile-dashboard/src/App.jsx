
import { Routes, Route } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import HobbiesList from "./components/HobbiesList";
import Sidebar from "./components/SIdeBar";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />

      <Routes>
        <Route path="/" element={<ProfileCard />} />
        <Route path="/hobbies" element={<HobbiesList />} />
      </Routes>
    </div>
  );
}
