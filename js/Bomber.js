class Bomber extends Phaser.Scene {
  constructor() {
    super({ key: 'bomber' });

    this.player;
    this.stars;
    this.bombs;
    this.platforms;
    this.cursors;
    this.score = 0;
    this.scoreText;
  }

  preload() {
    this.load.image('sky', 'assets/espacio2.jpg');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });
  }

  create() {
    const background = this.add.image(400, 300, 'sky');
    background.displayWidth = this.game.config.width;
    background. displayHeight = this.game.config.height;

    this.setPlatforms();

    this.createPlayer();

    this.createAnimations();

    this.cursors = this.input.keyboard.createCursorKeys();

    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 5, y: 0, stepX: 70 }
    });

    this.stars.children.iterate(function (child) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
    });

    this.bombs = this.physics.add.group({
      key: 'bomb',
      repeat: 10,
      setXY: { x: 1, y: 2, stepX: 100, stepY: 200 }
    });

    this.bombs.children.iterate(function (child) {
      child.body.velocity.setTo(250, 250);
      child.body.collideWorldBounds = true;
      child.body.bounce.set(1);
      child.body.gravity.set(0, 180);
    });

    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.collider(this.bombs, this.platforms);
    this.physics.add.overlap(this.player, this.stars, this.collectStar, null, this);
    this.physics.add.overlap(this.player, this.bombs, this.hitBomb, null, this);

    //coordenadas donde se verá el texto. 'score: 0' es la cadena predeterminada a mostrar
    this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    // // Add play button
    // this.load.image('play-button', 'assets/button.png');
    // const h1 = this.add.dom(400, 300, 'h1', null, 'gameOver');
    // h1.setClassName('gameOver');
    //
    // // const playButton = this.add.image(400, 300, 'play-button');
    // h1.setInteractive();
    // h1.once('pointerup', () => this.scene.start('diamond'), this);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown){
      this.player.setVelocityX(160);
      this.player.anims.play('right', true);
    }  else {
      this.player.setVelocityX(0);
      this.player.anims.play('turn');
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }

  setPlatforms() {
    this.platforms = this.physics.add.staticGroup();

    // complete la barra de base para que complete el canvas
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');
  }

  createPlayer() {
    this.player = this.physics.add.sprite(100, 450, 'dude');

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
  }

  createAnimations() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start:5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });
  }

  //Todo lo que se hará en esta función es detener el juego y pintar al personaje en rojo
  hitBomb (player, bomb) {

    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    this.scene.start('gameover')

    // gameOver = true;
  }

  collectStar (player, star) {
   star.disableBody(true, true);
   this.scene.start('win')

    //concatenacion de del score con los puntos sumados
    this.score += 10;
    this.scoreText.setText('Score: ' + this.score);
  }
}
