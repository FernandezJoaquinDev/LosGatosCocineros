import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: "",
    ingredientes: "",
    pasos: "",
    sinGluten: false,
    categoria: "salado",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    try {
      const token = sessionStorage.getItem("token");

      const receta = {
        nombre: form.nombre,
        ingredientes: form.ingredientes
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item !== "")
          .map((item) => {
            const [nombre, cantidad] = item.split(":");

            return {
              nombre: nombre?.trim() || "",
              cantidad: cantidad?.trim() || "",
            };
          }),
        pasos: form.pasos
          .split(".")
          .map((p) => p.trim())
          .filter((p) => p !== "")
          .map((p) => ({
            descripcion: p,
          })),
        sinGluten: form.sinGluten,
        categoria: form.categoria,
      };

      const resp = await fetch(
        "https://losgatoscocineros.onrender.com/recetas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(receta),
        },
      );

      const data = await resp.json();

      if (!resp.ok) {
        setError(data.msg || "Error al crear receta");
        return;
      }

      setSuccess("Receta creada correctamente");

      setForm({
        nombre: "",
        ingredientes: "",
        pasos: "",
        sinGluten: false,
        categoria: "salado",
      });
    } catch (err) {
      console.log(err);
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <div className="min-h-screen bg-amber-200 flex items-center justify-center px-4">
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
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <div className="bg-amber-100 border border-amber-300 text-amber-800 text-sm px-4 py-2 rounded-xl w-full text-center shadow-sm">
          Panel de administración
        </div>

        <div className="bg-amber-100 shadow-xl rounded-2xl p-8 w-full">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-amber-900">
              Creá una nueva receta
            </h2>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-sm text-amber-900 mb-1">
                Nombre de la receta
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                className="p-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-amber-900 mb-1">
                Ingredientes (formato: ingrediente:cantidad,
                ingrediente:cantidad)
              </label>
              <input
                type="text"
                name="ingredientes"
                value={form.ingredientes}
                onChange={handleChange}
                className="p-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-amber-900 mb-1">
                Pasos (separados por punto)
              </label>
              <textarea
                name="pasos"
                value={form.pasos}
                onChange={handleChange}
                className="p-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <label className="flex items-center gap-2 text-amber-900 text-sm">
              <input
                type="checkbox"
                name="sinGluten"
                checked={form.sinGluten}
                onChange={handleChange}
              />
              Sin gluten
            </label>

            <div className="flex flex-col">
              <label className="text-sm text-amber-900 mb-1">Categoría</label>
              <select
                name="categoria"
                value={form.categoria}
                onChange={handleChange}
                className="p-2 rounded-lg border border-amber-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="salado">Salado</option>
                <option value="dulce">Dulce</option>
              </select>
            </div>

            {error && (
              <div className="bg-red-100 text-red-700 p-2 rounded-lg text-sm text-center">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-100 text-green-700 p-2 rounded-lg text-sm text-center">
                {success}
              </div>
            )}

            <button
              type="submit"
              className="mt-2 bg-orange-600 text-white font-semibold py-2 rounded-lg
              transition-all duration-300
              hover:bg-orange-700 hover:shadow-md active:scale-95"
            >
              Crear una receta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
