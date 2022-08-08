//Servidor express
const express = require('express')
//Servidor Sockets
const http = require('http')

//Configuracion del socket server
const socketio = require('socket.io')

const path = require('path')
const Socket = require("./Socket");
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT

        //Http Server
        this.server = http.createServer(this.app);

        //Configuracion de Sockets
        this.io = socketio(this.server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
                credentials: true
            }
        })
    }

    middlewares() {
        //Desplegar el directorio public
        this.app.use(express.static(path.resolve(__dirname, '../public')))

        this.app.use(cors())
    }

    configurarSockets() {
        new Socket(this.io)
    }

    execute() {
        this.middlewares()

        this.configurarSockets()

        this.server.listen(this.port, () => {
            console.log('El server esta corriendo en el puerto:', this.port)
        });
    }
}

module.exports = Server