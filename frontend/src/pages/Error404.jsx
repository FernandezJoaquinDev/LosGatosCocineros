import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-300">
      <img
        src="https://res.cloudinary.com/dfk6x5ght/image/upload/q_auto/f_auto/v1775664452/error404_ocaxay.png"
        alt="img404"
        width={450}
        className="transition"
      />
      <Link
        className="
          px-6 py-3
          bg-black
          text-white
          rounded-xl
          cursor-pointer
          hover:bg-gray-800
          transition
        "
        to={"/"}
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error404;
