const BandList = require('./band-list')

class Socket {
    constructor(io) {
        this.io = io
        this.bandList = new BandList()
        this.socketEvents()
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            console.log('Cliente conectado')

            // Emitir al cliente conectado todas las bandas actuales
            socket.emit('current-bands', this.bandList.getBands())

            // votar por la banda
            socket.on('votar-banda', (id) => {
                this.bandList.incraseVotes(id)
                this.io.emit('current-bands', this.bandList.getBands())
            })

            // votar por la banda
            socket.on('borrar-banda', (id) => {
                this.bandList.removeBand(id)
                this.io.emit('current-bands', this.bandList.getBands())
            })

            socket.on('cambiar-nombre-banda', ({id, nombre}) => {
                this.bandList.changeName(id, nombre)
                this.io.emit('current-bands', this.bandList.getBands())
            })

            socket.on('crear-banda', ({nombre}) => {
                this.bandList.addBand(nombre)
                this.io.emit('current-bands', this.bandList.getBands())
            })
        });

    }
}

module.exports = Socket