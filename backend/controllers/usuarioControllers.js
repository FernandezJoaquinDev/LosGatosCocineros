const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");
const { generarJWT } = require("../helpers/generarJWT");

const crearUsuario = async (req, res) => {
  try {
    const { nombre, contraseña, dni } = req.body;

    const usuarioExistente = await Usuario.findOne({ dni });

    if (usuarioExistente) {
      return res.status(400).json({
        msg: "El usuario ya existe",
      });
    }

    const salt = bcrypt.genSaltSync();
    const contraseñaHash = bcrypt.hashSync(contraseña, salt);

    const nuevoUsuario = new Usuario({
      nombre,
      dni,
      contraseña: contraseñaHash,
    });

    await nuevoUsuario.save();

    res.status(201).json({
      msg: "Usuario creado correctamente",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Error al crear usuario",
    });
  }
};

const loginUsuario = async (req, res) => {
  try {
    const { dni, contraseña } = req.body;

    const usuario = await Usuario.findOne({ dni });

    if (!usuario) {
      return res.status(400).json({
        msg: "Estos datos no corresponden a ningún administrador",
      });
    }

    const validPassword = bcrypt.compareSync(contraseña, usuario.contraseña);

    if (!validPassword) {
      return res.status(400).json({
        msg: "Estos datos no corresponden a ningún administrador",
      });
    }

    const token = await generarJWT(usuario._id, usuario.nombre);

    res.json({
      msg: "Login exitoso",
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuarioEliminado = await Usuario.findByIdAndDelete(id);

    if (!usuarioEliminado) {
      return res.status(404).json({
        msg: "Usuario no encontrado",
      });
    }

    res.json({
      msg: "Usuario eliminado correctamente",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "Error al eliminar usuario",
    });
  }
};

module.exports = {
  crearUsuario,
  loginUsuario,
  deleteUsuario,
};
