import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-amber-200 min-h-screen flex flex-col justify-between">
      <div className="flex justify-center items-center bg-amber-300 py-2">
        <img
          src="src/assets/gatosCocinerosSF.png"
          alt="logoPrincipal"
          className="w-32 md:w-40"
        />
      </div>

      <div className="flex items-center justify-center flex-1">
        <div className="flex flex-col md:flex-row gap-5 md:gap-24">
          <div
            className="relative cursor-pointer
                       w-65 h-65 md:w-90 md:h-90
                       bg-orange-600 rounded-3xl shadow-xl
                       flex items-center justify-center
                       transition-all duration-300
                       hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            <span className="text-xl md:text-3xl font-bold text-white z-10">
              Con Gluten
            </span>

            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white rounded-tl-xl"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-xl"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white rounded-bl-xl"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white rounded-br-xl"></div>
          </div>

          {/* 🟢 Sin Gluten */}
          <div
            className="relative cursor-pointer
                       w-65 h-65 md:w-90 md:h-90
                       bg-lime-600 rounded-3xl shadow-xl
                       flex items-center justify-center
                       transition-all duration-300
                       hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            <span className="text-xl md:text-3xl font-bold text-white z-10">
              Sin Gluten
            </span>

            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white rounded-tl-xl"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white rounded-tr-xl"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white rounded-bl-xl"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white rounded-br-xl"></div>
          </div>
        </div>
      </div>

      <div className="w-full bg-amber-300 text-amber-900 p-3 flex justify-end">
        <span className="footItem" onClick={() => navigate("/aboutus")}>
          Sobre Nosotros
        </span>
        <span className="px-2">|</span>
        <span className="footItem" onClick={() => navigate("/redes")}>
          Redes
        </span>
        <span className="px-2">|</span>
        <span className="footItem" onClick={() => navigate("/proyecto")}>
          Proyecto
        </span>
        <span className="px-2">|</span>
        <span className="footItem" onClick={() => navigate("/login")}>
          Administración
        </span>
      </div>
    </div>
  );
};

export default Home;
