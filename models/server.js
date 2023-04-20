const express = require("express")

class Server {
    constructor(){
        this.app = express()
        this.port = 8010
        this.middlewares()
        this.listen()
        this.routes()
        
    }

    middlewares(){
        this.app.use(express.json())
    }
    routes(){
        this.app.use("/api/question", require("../routes/contacts"))
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log("Escuchando puerto " + this.port)
        })
    }
}

module.exports = Server