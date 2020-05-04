let Player = require('./player');

class PlayerService {
    constructor() {
        this.players = {};
    }
    addPlayer(socket) {
        this.players[socket.id] = new Player(socket.id);
        socket.emit('currentPlayers', this.players);
        console.log("event emitted");
    }

    getPlayers() {
        return this.players;
    }

    getPlayerById(id) {
        return this.players[id];
    }

    removePlayerById(socket) {
        delete this.players[socket.id];
    }
}

module.exports = PlayerService;