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

function preload() {
  this.load.image('background', 'asset/tile.png');
}

function create() {
  let width = this.physics.world.bounds.width;
  let height = this.physics.world.bounds.height;
  this.add.tileSprite(0, 0, width * 2, height * 2, 'background');
  
}

function update() {

}