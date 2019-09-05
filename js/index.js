const config = {
    type: Phaser.AUTO,
    parent: 'container',
    width: 800,
    height: 600,
    scene: [MainMenu, Bomber]
};

new Phaser.Game(config);
