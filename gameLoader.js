import Player1 from "./GameObjects/Player1.js";

class gameLoader extends Phaser.Scene {
    constructor() {
        super({ key: "gameLoader" });
    }

    preload() {
        this.load.image('mapl', 'assets/RPG Nature Tileset.png');
        this.load.tilemapTiledJSON('map', 'assets/map.json');
        this.load.spritesheet('player', 'assets/Player1.png',
            { frameWidth: 31, frameHeight: 32 });
        this.load.spritesheet('player2', 'assets/player2.png',
            { frameWidth: 31, frameHeight: 32 });
        this.load.spritesheet('player3', 'assets/player3.png',
            { frameWidth: 31, frameHeight: 32 });
    }

    create() {
        const map = this.make.tilemap({ key: 'map' });
        const titleSet = map.addTilesetImage('RPG Nature Tileset', 'mapl', 32, 32, 0, 0);
        const layer1 = map.createStaticLayer('Capa de patrones 1', titleSet, 0, 0);
        const layer2 = map.createStaticLayer('Capa de patrones 2', titleSet, 0, 0);

        //Jugadores
        this.Player1 = new Player1(this, 100, 110, 'player');
        this.Player2 = new Player1(this, 85, 400, 'player2');
        this.Player3 = new Player1(this, 400, 70, 'player3');



        this.anims.create({
            key: 'abajo',
            repeat: 0,
            frameRate: 10,
            frames: this.anims.generateFrameNames('player', { start: 0, end: 2 })
        });

        this.anims.create({
            key: 'izquierda',
            repeat: 1,
            frameRate: 10,
            frames: this.anims.generateFrameNames('player', { start: 3, end: 5 })
        });
        this.anims.create({
            key: 'derecha',
            repeat: 1,
            frameRate: 10,
            frames: this.anims.generateFrameNames('player', { start: 6, end: 7 })
        });

        this.anims.create({
            key: 'arriba',
            repeat: 1,
            frameRate: 10,
            frames: this.anims.generateFrameNames('player', { start: 9, end: 12 })
        });

        this.anims.create({
            key: 'parao',
            repeat: 0,
            frameRate: 10,
            frames: this.anims.generateFrameNames('player', { start: 1, end: 1 })
        });




    }

    update() {
        var cursors;
        cursors = this.input.keyboard.createCursorKeys();

        if (cursors.down.isDown) {
            this.Player1.anims.play('abajo', true);
            this.Player1.body.setVelocityY(35);
        }
        else if (cursors.up.isDown) {
            this.Player1.body.setVelocityY(-35);
            this.Player1.anims.play('arriba', true);
        }
        else if (cursors.left.isDown) {
            this.Player1.body.setVelocityX(-35);
            this.Player1.anims.play('izquierda', true);
        }
        else if (cursors.right.isDown) {
            this.Player1.body.setVelocityX(35);
            this.Player1.anims.play('derecha', true);
        }
        else {
            this.Player1.body.setVelocity(0);
            this.Player1.anims.play('parao', true)
        }


    }
}

export default gameLoader