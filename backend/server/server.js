const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    async conectarDB(){
        try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo conectado")
    }catch(err){
        console.log(err)
    }
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    routes(){
        this.app.use("/recetas", require("../routes/recetaRoutes"))
        this.app.use("/usuarios", require("../routes/usuarioRoutes"))
    }
    listen(){
        this.app.listen(this.port, () => {
          console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server