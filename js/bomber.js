class Bomber extends Phaser.Scene {
  constructor() {
    super({ key: 'bomber' });
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
  }

  update() {

  }
}

// var player;
// var stars;
// var bombs;
// var platforms;
// var cursors;
// var score = 0;
// var scoreText;

// var game = new Phaser.Game(config);

// function preload() {
  
// }

// function create() {
  

//   setPlatforms(this);

//   createPlayer(this);

//   createAnimations(this);

//   cursors = this.input.keyboard.createCursorKeys();

//   stars = this.physics.add.group({
//     key: 'star',
//     repeat: 11,
//     setXY: { x: 5, y: 0, stepX: 70 }
//   });

//     stars.children.iterate(function (child) {
//       child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))
//     });

//     bombs = this.physics.add.group({
//       key: 'bomb',
//       repeat: 11,
//       setXY: { x: 3, y: 2, stepX: 45, stepY: 40 }
//     });

//   bombs.children.iterate(function (child) {
//     child.setBounceY(Phaser.Math.FloatBetween(-0.4, 0.8))
//   });

//   this.physics.add.collider(player, platforms);
//   this.physics.add.collider(stars, platforms);
//   this.physics.add.collider(bombs, platforms);
//   this.physics.add.overlap(player, stars, collectStar, null, this);
//   this.physics.add.overlap(player, bombs, hitBomb, null, this);

//   //coordenadas donde se verá el texto. 'score: 0' es la cadena predeterminada a mostrar
//   scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
// }

// function update() {
//   if (cursors.left.isDown) {
//     player.setVelocityX(-160);
//     player.anims.play('left', true);
//   } else if (cursors.right.isDown){
//     player.setVelocityX(160);
//     player.anims.play('right', true);
//   }  else {
//     player.setVelocityX(0);
//     player.anims.play('turn');
//   }

//   if (cursors.up.isDown && player.body.touching.down) {
//     player.setVelocityY(-330);
//   }
// }

// function setPlatforms(self) {
//   platforms = self.physics.add.staticGroup();

// //complete la barra de base para que complete el canvas
//   platforms.create(400, 568, 'ground').setScale(2).refreshBody();

//   platforms.create(600, 400, 'ground');
//   platforms.create(50, 250, 'ground');
//   platforms.create(750, 220, 'ground');
// }

// function createPlayer(self){
//   player = self.physics.add.sprite(100, 450, 'dude');

//   player.setBounce(0.2);
//   player.setCollideWorldBounds(true);
// }

// //Todo lo que se hará en esta función es detener el juego y pintar al personaje en rojo
// function hitBomb (player, bomb)

// {
//   // self.physics.pause();

//   player.setTint(0xff0000);//

//   player.anims.play('turn');

//   gameOver = true;
// }

// function createAnimations(self){
//   self.anims.create({
//     key:'left',
//     frames:self.anims.generateFrameNumbers('dude',{start:0, end :3}),
//     frameRate:10,
//     repeat:-1
//   });

//   self.anims.create({
//     key: 'turn',
//     frames: [{key:'dude',frame:4}],
//     frameRate:20
//   });

//   self.anims.create({
//     key:'right',
//     frames:self.anims.generateFrameNumbers('dude',{start:5, end :8}),
//     frameRate:10,
//     repeat:-1
//   });
// }

// function collectStar (player, star)
// {
//     star.disableBody(true, true);

//   //concatenacion de del score con los puntos sumados
//   score += 10;
//   scoreText.setText('Score: ' + score);

// }
  

