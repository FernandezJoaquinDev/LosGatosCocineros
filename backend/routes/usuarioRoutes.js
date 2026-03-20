// routes/usuarioRoutes.js

const { Router } = require("express")
const { check } = require("express-validator")

const {
  crearUsuario,
  loginUsuario,
  deleteUsuario
} = require("../controllers/usuarioControllers")

const { validacionRutas } = require("../middlewares/validarCampos")
const router = Router()

router.post("/", [
  check("nombre", "El nombre es obligatorio").notEmpty(),
  check("dni", "El dni es obligatorio").notEmpty(),
  check("contraseña", "La contraseña es obligatoria").notEmpty(),
  validacionRutas
], crearUsuario)



router.post("/login", [
  check("dni", "El dni es obligatorio").notEmpty(),
  check("contraseña", "La contraseña es obligatoria").notEmpty(),
  validacionRutas
], loginUsuario)



router.delete("/:id", [
  check("id", "ID no válido").isMongoId(),
  validacionRutas
], deleteUsuario)

module.exports = router