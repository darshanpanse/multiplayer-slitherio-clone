class Snake {
    constructor() {
        this.x = Math.floor(Math.random() * 800) + 50;
        this.y = Math.floor(Math.random() * 600) + 50;
        this.debug = false;
        this.scale = 0.6;
        this.snakeLength = 0;
        this.slowSpeed = 120;
        this.fastSpeed = 200;
        this.speed = this.slowSpeed;
        this.rotationSpeed = 40;
        this.preferredDistance = 17 * 0.6;
        this.sections = this.initSections();
        this.headPath = this.sections;
        this.food = [];
        this.queuedSections = 0;
        this.edgeOffset = 4;
    }

    initSections() {
        let result = [];
        for (let i = 1 ; i <= 30 ; i++) {
            let x = this.x;
            let y = this.y + i * this.preferredDistance;
            result.push({x: x, y: y});
        }
        return result;
    }
}

module.exports = Snake;