import jwt from "jsonwebtoken";

export const validarJWT = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({
        msg: "No hay token en la petición",
      });
    }

    const token = authHeader.replace("Bearer ", "");

    const payload = jwt.verify(token, process.env.SECRET_KEY);

    req.usuario = payload;

    next();
  } catch (error) {
    return res.status(401).json({
      msg: "Token no válido",
    });
  }
};
