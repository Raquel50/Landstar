var config = {
 type: Phaser.AUTO,
 width: 617,
 height: 410,
 backgroundColor: '#01DF01',
 parent: 'phaser-example',
 scene: {
  preload: preload,
  create: create,
  update: update
 }
};

var alien1;
var game = new Phaser.Game(config);

function preload() {
 this.load.image('alien', './alien1.png');
 this.load.image('texto', './texto.png');
}

function create() {
 this.add.image(300,100, 'texto');
 alien1 = this.add.image(305, 250, 'alien');
}

function update() {
 alien1.rotation += 0.01;
}
