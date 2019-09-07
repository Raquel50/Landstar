class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainmenu' });
  }

  preload () {
    this.load.css('landstar', 'assets/css/landstar.css');
    // this.load.image('play-button', 'assets/play.jpg');
  }

  create() {
    // Set background color
    this.cameras.main.setBackgroundColor('#e67e22');

    // Add play button
    const h1 = this.add.dom(400, 300, 'h1', null, 'Play');
    h1.setClassName('play');

    // const playButton = this.add.image(400, 300, 'play-button');
    h1.setInteractive();
    h1.once('pointerup', () => this.scene.start('bomber'), this);
  }
}
