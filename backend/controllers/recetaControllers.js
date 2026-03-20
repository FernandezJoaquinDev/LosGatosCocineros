const Receta = require("../models/Receta")

const getRecetasTotales = async (req, res) => {
  try {

        const recetas = await Receta.find()

        if (recetas.length === 0) {
            return res.status(404).json({
                msg: "No hay recetas"
            })
        }

        res.json(recetas)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            msg: "Error al obtener recetas"
        })
    }
}

const postReceta = async (req, res) => {
  try {

    const recetaNueva = new Receta(req.body)

    const recetaGuardada = await recetaNueva.save()

    res.status(201).json({
      msg: "Receta creada correctamente",
      receta: recetaGuardada
    })

  } catch (error) {

    console.log("Error al crear receta:", error)

    res.status(500).json({
      msg: "Error al crear la receta"
    })

  }
}

const getReceta = async (req, res) => {
  try {

        const { id } = req.params

        const receta = await Receta.findById(id)

        if (!receta) {
            return res.status(404).json({
                msg: "Receta no encontrada"
            })
        }

        res.json(receta)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            msg: "Error al obtener la receta"
        })
    }
}

const deleteReceta = async (req, res) => {
  try {

    const { id } = req.params

    const recetaEliminada = await Receta.findByIdAndDelete(id)

    if (!recetaEliminada) {
      return res.status(404).json({
        msg: "Receta no encontrada"
      })
    }

    res.json({
      msg: "Receta eliminada correctamente",
      receta: recetaEliminada
    })

  } catch (error) {

    console.log("Error al eliminar receta:", error)

    res.status(500).json({
      msg: "Error al eliminar la receta"
    })

  }
}
module.exports = {getRecetasTotales, postReceta, getReceta, deleteReceta}