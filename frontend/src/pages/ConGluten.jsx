import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ConGluten = ({ conGluten }) => {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-orange-200 flex flex-col items-center px-4 py-10">
      <button
        className="absolute top-4 left-4 bg-amber-900 p-3 rounded-xl shadow-md
               hover:bg-amber-800 transition-all duration-300
               active:scale-95 cursor-pointer"
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
      <div className="bg-orange-100 border border-orange-300 text-orange-800 text-lg px-4 py-2 rounded-xl w-full max-w-md text-center shadow-sm mb-6">
        Recetas con gluten
      </div>

      <input
        type="text"
        placeholder="Buscar receta..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full max-w-md mb-6 p-2 rounded-lg border border-orange-300 
        focus:outline-none focus:ring-2 focus:ring-orange-400 bg-orange-100 text-center"
      />

      <div className="grid gap-6 w-full max-w-4xl">
        {conGluten
          .filter((receta) =>
            receta.nombre.toLowerCase().includes(busqueda.toLowerCase()),
          )
          .map((receta) => (
            <div
              key={receta._id}
              className="bg-orange-100 shadow-lg rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold text-orange-900 mb-2">
                {receta.nombre}
              </h2>

              <div className="mb-3">
                <p className="font-semibold text-orange-800">Ingredientes:</p>
                <ul className="list-disc list-inside text-orange-700">
                  {receta.ingredientes.map((ing, i) => (
                    <li key={i}>
                      {ing.nombre} {ing.cantidad && `- ${ing.cantidad}`}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-semibold text-orange-800">Pasos:</p>
                <ol className="list-decimal list-inside text-orange-700">
                  {receta.pasos.map((p, i) => (
                    <li key={i}>{p.descripcion}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ConGluten;
