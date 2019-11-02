class Diamond extends Phaser.Scene {
  constructor() {
    super({ key: 'Win' });

    preload () {
      this.load.css('win', 'assets/css/landstar.css');
      // this.load.image('GameOver-button', 'assets/button.png');
    }

    create() {
      const self = this;

      this.cameras.main.setBackgroundColor('#009432');

      const h1 = this.add.dom(400, 200, 'h1', null, 'CONGRATULATION');
      h1.setClassName('win');
      h1.setClassName('animated-shadow');

    }
  }
