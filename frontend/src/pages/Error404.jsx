import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-300">
      <img
        src="public/error404.png"
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
