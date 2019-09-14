const config = {
  dom: {
    createContainer: true
  },
  height: 600,
  parent: 'container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [MainMenu, Bomber, Diamond],
  type: Phaser.AUTO,
  width: 800
};

new Phaser.Game(config);
