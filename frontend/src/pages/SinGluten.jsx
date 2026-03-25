import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SinGluten = () => {
  const [recetas, setRecetas] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const obtenerRecetas = async () => {
      try {
        const resp = await fetch("http://localhost:5000/recetas");
        const data = await resp.json();

        const filtradas = data.filter((r) => r.sinGluten === true);
        setRecetas(filtradas);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerRecetas();
  }, []);

  return (
    <div className="min-h-screen bg-lime-200 flex flex-col items-center px-4 py-10">
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
      <div className="bg-lime-100 border border-lime-300 text-lime-800 text-sm px-4 py-2 rounded-xl w-full max-w-md text-center shadow-sm mb-6">
        Recetas sin gluten
      </div>

      <div className="grid gap-6 w-full max-w-4xl">
        {recetas.map((receta) => (
          <div
            key={receta._id}
            className="bg-lime-100 shadow-lg rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-lime-900 mb-2">
              {receta.nombre}
            </h2>

            <div className="mb-3">
              <p className="font-semibold text-lime-800">Ingredientes:</p>
              <ul className="list-disc list-inside text-lime-700">
                {receta.ingredientes.map((ing, i) => (
                  <li key={i}>
                    {ing.nombre} {ing.cantidad && `- ${ing.cantidad}`}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-semibold text-lime-800">Pasos:</p>
              <ol className="list-decimal list-inside text-lime-700">
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

export default SinGluten;
