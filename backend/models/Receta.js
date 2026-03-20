const mongoose = require("mongoose")

const RecetaSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    ingredientes:[{
        nombre: {type: String, required: true},
        cantidad: {type: String, required: true},
    }],
    pasos:[{
        descripcion: {type: String},
    }],
    sinGluten:{
        type: Boolean,
        default: false
    },
    categoria:{
        type: String,
        enum: ["salado", "dulce"],
        required: true
    }
},
{timestamps: true}
)
module.exports = mongoose.model("Receta", RecetaSchema, "Recetas")