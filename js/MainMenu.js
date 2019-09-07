class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainmenu' });
  }


preload () {
  this.load.image('sky', 'assets/sky.png');
}

create() {
  this.add.image(400, 270, 'sky');
}
}
