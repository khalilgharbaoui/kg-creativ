Game = {};
var w = 320;
var h = 320;
var score = 0;
var best_score = 0;
var sound = false;

function rand(b) {
  return Math.floor(Math.random() * b);
}
Game.Boot = function(b) {};
Game.Boot.prototype = {
  preload: function() {
    game.stage.backgroundColor = "#90b6fc";
    game.load.image("loading", "../../demos/mario-frog-king/images/loading.png");
    game.load.image("loading2", "../../demos/mario-frog-king/images/loading2.png");
    game.load.image("orientation", "../../demos/mario-frog-king/images/orientation.png");
  },
  create: function() {
    if (!this.game.device.desktop) {
      document.body.style.backgroundColor = "#90b6fc";
      game.stage.scale.forceOrientation(false, true, "orientation");
      game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
      this.game.stage.scale.pageAlignHorizontally = true;
      this.game.stage.scale.pageAlignVeritcally = true;
      game.stage.scale.setShowAll();
      game.stage.scale.refresh();
    }
    this.game.state.start("Load");
  }
};
Game.Load = function(b) {};
Game.Load.prototype = {
  preload: function() {
    label2 = game.add.text(Math.floor(w / 2) + 0.5, Math.floor(h / 2) - 15 + 0.5, "loading...", {
      font: "12px Arial",
      fill: "#fff"
    });
    label2.anchor.setTo(0.5, 0.5);
    preloading2 = game.add.sprite(w / 2, h / 2 + 15, "loading2");
    preloading2.x -= preloading2.width / 2;
    preloading = game.add.sprite(w / 2, h / 2 + 19, "loading");
    preloading.x -= preloading.width / 2;
    game.load.setPreloadSprite(preloading);
    game.load.image("title", "../../demos/mario-frog-king/images/title.png");
    game.load.image("heart", "../../demos/mario-frog-king/images/star.png");
    game.load.image("star2", "../../demos/mario-frog-king/images/star2.png");
    game.load.image("spike", "../../demos/mario-frog-king/images/pik.png");
    game.load.image("wolk", "../../demos/mario-frog-king/images/wolk.png");
    game.load.image("ground", "../../demos/mario-frog-king/images/grond.png");
    game.load.image("platform", "../../demos/mario-frog-king/images/platform.png");
    game.load.image("mario_zoom", "../../demos/mario-frog-king/images/mario_zoom.png");
    game.load.spritesheet("mario", "../../demos/mario-frog-king/images/mario.png", 50, 72);
    game.load.image("line", "../../demos/mario-frog-king/images/line.png");
  },
  create: function() {
    game.state.start("Menu");
  }
};
