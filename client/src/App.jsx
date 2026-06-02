import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ReceptionistDashboard from "./pages/ReceptionistDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/doctor"
        element={
          <ProtectedRoute allowedRole="doctor">
            <DoctorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/receptionist"
        element={
          <ProtectedRoute allowedRole="receptionist">
            <ReceptionistDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
