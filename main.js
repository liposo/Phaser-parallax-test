var game = new Phaser.Game(800, 216, Phaser.Canvar, "gamediv");

var background1;
var background2;
var background3;
var background4;

var backgroundSpeed = 10;

var player;

var shoots;
var shootDelay;
var shootButton;

var cursors;

var mainState = {
  preload: function() {
    game.load.image("background1", "assets/background/plx-2.png");
    game.load.image("background2", "assets/background/plx-3.png");
    game.load.image("background3", "assets/background/plx-4.png");
    game.load.image("background4", "assets/background/plx-5.png");

    game.load.spritesheet("player", "assets/player.png", 64, 64);
  },

  create: function() {
    background1 = game.add.tileSprite(0, 0, 800, 0, "background1");
    background2 = game.add.tileSprite(0, 0, 800, 0, "background2");
    background3 = game.add.tileSprite(0, 0, 800, 0, "background3");
    background4 = game.add.tileSprite(0, 0, 800, 0, "background4");

    player = game.add.sprite(30, game.world.centerY - 32, "player");
    player.animations.add("default", [0, 1, 2, 4], 10, true);
    player.animations.play("default");

    game.physics.enable(player, Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();
  },

  update: function() {
    background1.tilePosition.x -= backgroundSpeed - 8.5;
    background2.tilePosition.x -= backgroundSpeed - 8;
    background3.tilePosition.x -= backgroundSpeed - 7.5;
    background4.tilePosition.x -= backgroundSpeed - 6.5;

    player.body.velocity.y = 0;

    if (cursors.up.isDown) {
      player.body.velocity.y = -60;
    }
    if (cursors.down.isDown) {
      player.body.velocity.y = 60;
    }
  }
};

game.state.add("mainState", mainState);
game.state.start("mainState");
