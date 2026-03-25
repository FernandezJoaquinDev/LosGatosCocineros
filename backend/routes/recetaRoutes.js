const express = require("express");
const {
  getRecetasTotales,
  postReceta,
  getReceta,
  deleteReceta,
} = require("../controllers/recetaControllers");
const { check } = require("express-validator");
const { validacionRutas } = require("../middlewares/validarCampos");
const { validarJWT } = require("../middlewares/validarJWT");

const router = express.Router();

router.get("/", getRecetasTotales);

router.post("/", validarJWT, postReceta);

router.get(
  "/:id",
  [check("id", "No es un id valido para mongo").isMongoId(), validacionRutas],
  getReceta,
);

router.delete(
  "/:id",
  [check("id", "No es un id valido para mongo").isMongoId(), validacionRutas],
  deleteReceta,
);

module.exports = router;
