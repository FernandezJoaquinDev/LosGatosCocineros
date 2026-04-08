import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [dni, setDni] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    try {
      const resp = await fetch(
        "https://losgatoscocineros.onrender.com/usuarios/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dni,
            contraseña,
          }),
        },
      );

      const data = await resp.json();

      if (!resp.ok) {
        setError(data.msg);
        return;
      }

      sessionStorage.setItem("token", data.token);

      sessionStorage.setItem("usuario", JSON.stringify(data.usuario));
      alert("Sesion iniciada correctamente");
      navigate("/admin");
    } catch (err) {
      console.log(err);
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <div className="min-h-screen bg-amber-200 flex items-center justify-center relative">
      <button
        className="absolute top-4 left-4 bg-amber-900 p-3 rounded-xl shadow-md
               hover:bg-amber-800 transition-all duration-300
               active:scale-95"
        onClick={() => navigate("/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10.5L12 3l9 7.5M5 10v9h14v-9"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center gap-4">
        <div
          className="bg-amber-100 border border-amber-300 text-amber-800 
                    text-sm px-4 py-2 rounded-xl 
                    w-85 md:w-110 text-center shadow-sm"
        >
          Si no tenes cuenta, volvé a la pantalla principal
        </div>

        <div className="bg-amber-100 shadow-xl rounded-2xl p-8 w-[320px] md:w-100">
          <div className="text-center mb-3">
            <h2 className="text-2xl font-bold text-amber-900">
              Administración
            </h2>
            <p className="text-sm text-amber-700">
              Ingresá tus datos para continuar
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div className="flex flex-col">
              <label className="text-sm text-amber-900 mb-1">DNI</label>
              <input
                type="text"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                className="p-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-amber-900 mb-1">Contraseña</label>
              <input
                type="password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                className="p-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            {error && (
              <div className="bg-red-100 text-red-700 p-2 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="mt-4 bg-orange-600 text-white font-semibold py-2 rounded-lg
                     transition-all duration-300
                     hover:bg-orange-700 hover:shadow-md active:scale-95"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
