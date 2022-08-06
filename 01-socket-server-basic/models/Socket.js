class Socket {
    constructor(io) {
        this.io = io
        this.socketEvents()
    }

    socketEvents() {
        // On Connection
        this.io.on('connection', (socket) => {
            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', (mensaje) => {
                console.log(mensaje)

                this.io.emit('mensaje-from-server', mensaje)
            })
        });
    }
}

module.exports = Socket