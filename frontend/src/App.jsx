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
import { useState, useEffect } from "react";

function App() {
  const [conGluten, setConGluten] = useState([]);
  const [sinGluten, setSinGluten] = useState([]);

  useEffect(() => {
    const obtenerRecetas = async () => {
      try {
        const resp = await fetch(
          "https://losgatoscocineros.onrender.com/recetas",
        );
        const data = await resp.json();

        const filtradasCG = data.filter((r) => r.sinGluten === false);
        const filtradasSG = data.filter((r) => r.sinGluten === true);
        setConGluten(filtradasCG);
        setSinGluten(filtradasSG);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerRecetas();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route
        path="/recetas/conGLuten"
        element={<ConGluten conGluten={conGluten} />}
      />
      <Route
        path="/recetas/sinGluten"
        element={<SinGluten sinGluten={sinGluten} />}
      />
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
