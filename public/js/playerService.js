class PlayerService {
    constructor() {
        this.otherPlayers = {};
    }

    addPlayer(player) {
        this.player = player;
    }

    addOtherPlayer(player) {
        this.otherPlayers[player.id] = player;
    }

    get player() {
        return this.players;
    }

    get otherPlayers() {
        return this.otherPlayers;
    }
}