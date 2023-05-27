import Phaser from "phaser";

import CollectingStarScene from "./scenes/CollectingStarScene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [CollectingStarScene],
};

export default new Phaser.Game(config);
