/// <reference path="./phaser.d.ts" />


class MyScene extends Phaser.Scene {
    estrela: Phaser.GameObjects.Image;
    keys: any;

    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('star', 'assets/star.png');
    }
    
    create() {
        this.add.image(400, 300, 'sky');
        this.estrela = this.physics.add.image(20, 20, 'star');
        
        this.keys = this.input.keyboard.addKeys({
            espaco: Phaser.Input.Keyboard.KeyCodes.SPACE,
            direita: Phaser.Input.Keyboard.KeyCodes.RIGHT
        });
    }
    
    update() {
        let vx = 0, vy = 0;
        if (this.keys.direita.isDown) {
            vx = 2;
        }
        let x: Phaser.Physics.Arcade.Body = this.estrela.body;
        x.velocity = new Phaser.Math.Vector2(1, 0);
        
        
        
    }
}

let game = new Phaser.Game({
    width: 400,
    height: 300,
    scene: MyScene,
    physics: {
      default: 'arcade'
    }
});
  