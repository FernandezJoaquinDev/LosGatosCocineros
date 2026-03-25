import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import RecetaUnitaria from "./pages/RecetaUnitaria";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/recetas/:id" element={<RecetaUnitaria />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
