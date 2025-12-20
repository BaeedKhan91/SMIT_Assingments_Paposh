
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {


  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;
