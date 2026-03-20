const mongoose = require("mongoose")

const UsuarioSchema = mongoose.Schema({
    nombre: {type: String, required: true, trim:true},
    dni: {type: Number, required: true},
    contraseña:{type:String, required: true, trim: true}
},
{timestamps: true}
)

module.exports = mongoose.model("Usuario", UsuarioSchema, "Usuarios")