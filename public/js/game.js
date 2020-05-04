const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);
let playerService = new PlayerService();

function preload() {
  this.load.image('background', 'asset/tile.png');
}

function create() {
  this.socket = io();
  let width = this.physics.world.bounds.width;
  let height = this.physics.world.bounds.height;
  this.add.tileSprite(0, 0, width * 2, height * 2, 'background');
  let self = this;
  this.socket = io();
  this.socket.on('currentPlayers', function (players) {
    Object.keys(players).forEach(function (id) {
      if (id === self.socket.id) {
          playerService.addPlayer(players[id]);
      }
    });
  });
}

function update() {

}