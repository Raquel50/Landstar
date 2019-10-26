class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainmenu' });
  }

  preload () {
    this.load.css('landstar', 'assets/css/button.css');
    // this.load.image('play-button', 'assets/button.png');

  }

  create() {
    const self = this;

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
