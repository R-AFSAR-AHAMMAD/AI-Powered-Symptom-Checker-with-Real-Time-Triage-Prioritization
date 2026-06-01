import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ReceptionistDashboard from "./pages/ReceptionistDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/receptionist" element={<ReceptionistDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
