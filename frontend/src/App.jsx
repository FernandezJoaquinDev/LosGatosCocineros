import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PrivateRoute from "./routes/PrivateRoute";
import ConGluten from "./pages/ConGluten";
import SinGluten from "./pages/SinGluten";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/recetas/conGLuten" element={<ConGluten />} />
      <Route path="/recetas/sinGluten" element={<SinGluten />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutUs />} />
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
