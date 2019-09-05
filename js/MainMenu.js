class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainmenu' });
  }

  preload() {
    this.load.image('space', 'assets/fondo.webp');
    this.load.image('play', 'assets/play2.png');
    // this.load.image('alien', 'assets/alien1.jpg');
  }

  create() {
    this.add.image(400, 300, 'space');
    this.add.image(20, 20, 'play');
    // this.add.image(30, 250, 'alien')
  }
}
