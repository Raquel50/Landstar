class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainmenu' });
  }

  preload () {
    this.load.css('landstar', 'assets/css/landstar.css');
    this.load.image('play-button', 'assets/button.png');

  }

  create() {
    // Set background color
    this.cameras.main.setBackgroundColor('#30336b');

    // Add play button
    this.load.image('play-button', 'assets/button.png');
    const h1 = this.add.dom(400, 300, 'h1', null, 'Play');
    h1.setClassName('play');

    // const playButton = this.add.image(400, 300, 'play-button');
    h1.setInteractive();
    h1.once('pointerup', () => this.scene.start('bomber'), this);
    // this.load.image('play-button', 'assets/button.png');

  }
}
