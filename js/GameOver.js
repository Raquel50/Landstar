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

    this.cameras.main.setBackgroundColor('#009432');

    const h1 = this.add.dom(400, 200, 'h1', null, 'GAME OVER');
    h1.setClassName('gameover');
    h1.setClassName('animated-shadow');


    // Set background color
    this.cameras.main.setBackgroundColor('#009432');

    const gameOverButton = document.createElement('input');
    gameOverButton.className = 'boton-personalizado-4';
    gameOverButton.type = 'button';
    gameOverButton.value = 'INTENTAR DE NUEVO';
    gameOverButton.onclick = () => self.scene.start('bomber');
    this.add.dom(400, 300, gameOverButton).setInteractive();


    // Set background color
    //this.cameras.main.setBackgroundColor('#009432');

    //const tryAgainButton = document.createElement('input');
    //gameOverButton.className = 'boton-personalizado-5';
    //tryAgainButton.type = 'button';
    //tryAgainButton.value = 'INTENTAR DE NUEVO';
    //tryAgainButton.onclick = () => self.scene.start('bomber');
    //this.add.dom(500, 250, tryAgainButton).setInteractive();

  }
}
