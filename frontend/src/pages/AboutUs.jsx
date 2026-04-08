import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-amber-200 flex items-center justify-center px-4">
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
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <div className="bg-amber-100 shadow-xl rounded-2xl p-8 w-full flex flex-col items-center">
          <div className="w-40 h-40 mb-4">
            <img
              src="https://res.cloudinary.com/dfk6x5ght/image/upload/q_auto/f_auto/v1775664452/imgAbout_vi2ar2.png"
              alt="Nosotros"
              className="w-full h-full object-cover rounded-full border-4 border-amber-300 shadow-md"
            />
          </div>

          <h2 className="text-2xl font-bold text-amber-900 mb-2">
            Sobre Nosotros
          </h2>

          <p className="text-sm text-amber-800 text-center leading-relaxed">
            Somos una pareja que decidió crear este espacio con el objetivo de
            acompañar a quienes recientemente fueron diagnosticados con
            celiaquía, así como también a aquellas personas que conviven con
            esta condición desde hace tiempo.
            <br />
            <br />
            Nuestro propósito es ofrecer una forma simple, rápida y accesible de
            encontrar recetas que permitan disfrutar de la cocina en casa, sin
            complicaciones y sin resignar sabor.
            <br />
            <br />
            Buscamos que cada persona pueda encontrar opciones tanto con como
            sin gluten, adaptadas a distintas necesidades, para que cocinar y
            comer rico sea una experiencia inclusiva y al alcance de todos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
