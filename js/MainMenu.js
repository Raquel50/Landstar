class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainmenu' });
  }

  preload () {
    this.load.css('landstar', 'assets/css/button.css');
    // this.load.image('play-button', 'assets/button.png');
    this.load.css('animated-shadow', 'assets/css/button.css');
    // this.load.image('dude', 'assets/dude3.png');
    // this.load.image('star', 'assets/star.png');
  }

  create() {
    const self = this;

    // const dude3 = this.add.image(700, 80, 'dude');
    // const star = this.add.image(550, 80, 'star');

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
