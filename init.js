import gameLoader from './gameLoader.js';


const config = {
    width: 512,
    height: 512,
    parent: "container",
    physics: {
        default: "arcade"
    },

    scene: [gameLoader]
}

new Phaser.Game(config);