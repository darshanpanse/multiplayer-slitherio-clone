let Snake = require('./snake');

class Player {
    constructor(id) {
        this.id = id;
        this.snake = new Snake();
    }

    updateSnake(snake) {
        this.snake = snake;
    }
}

module.exports = Player;