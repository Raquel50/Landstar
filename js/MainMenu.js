class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainmenu' });
  }

  preload () {
    this.load.css('landstar', 'assets/css/button.css');
    // this.load.image('play-button', 'assets/button.png');
    this.load.css('animated-shadow', 'assets/css/button.css');

  }

  create() {
    const self = this;

    this.cameras.main.setBackgroundColor('#009432');

    const h1 = this.add.dom(400, 200, 'h1', null, 'LANDSTAR');
    h1.setClassName('landstar');
    h1.setClassName('animated-shadow');

    // Set background color
    this.cameras.main.setBackgroundColor('#30336b');

    const playButton = document.createElement('input');
    playButton.className = 'bubbly-button';
    playButton.type = 'button';
    playButton.value = 'PLAY';
    playButton.onclick = () => self.scene.start('bomber');
    this.add.dom(400, 300, playButton).setInteractive();
  }
}
