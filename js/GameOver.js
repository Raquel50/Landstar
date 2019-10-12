class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: 'gameover' });
  }

  preload () {
    this.load.css('landstar', 'assets/css/landstar.css');
    // this.load.image('GameOver-button', 'assets/button.png');
  }

  create() {
    const self = this;

    // Set background color
    this.cameras.main.setBackgroundColor('#009432');

    const gameOverButton = document.createElement('input');
    gameOverButton.className = 'boton-personalizado-4';
    gameOverButton.type = 'button';
    gameOverButton.value = 'GAME OVER';
    gameOverButton.onclick = () => self.scene.start('bomber');
    this.add.dom(400, 300, gameOverButton).setInteractive();
  }
}
