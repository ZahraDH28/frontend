import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "@/components/layout/AdminLayout";
import Dashboard from "@/pages/Dashboard";
import Rooms from "@/pages/rooms";
import Reports from "@/pages/laporan";
// import Payments from "@/pages/Payments";
import Reservations from "@/pages/reservations";
// import '@/src/App.css'

// ...existing code...


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        {/* <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        /> */}
        <Route
          path="/rooms"
          element={
            <AdminLayout>
              <Rooms />
            </AdminLayout>
          }
        />
        <Route
          path="/reports"
          element={
            <AdminLayout>
              <Reports />
            </AdminLayout>
          }
        />
        {/* <Route
          path="/payments"
          element={
            <AdminLayout>
              <Payments />
            </AdminLayout>
          }
        /> */}
        <Route
          path="/reservations"
          element={
            <AdminLayout>
              <Reservations />
            </AdminLayout>
          }
        /> 
      </Routes>
    </Router>
  );
}

export default App;
