import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Tasks from "./dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/tasks"
          element={
            localStorage.getItem("token") ? <Tasks /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}



