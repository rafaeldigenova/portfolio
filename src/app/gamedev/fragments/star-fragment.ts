import { GameConstants } from "../constants/game-constants";

export class starFragment {

    gameConstants: GameConstants;
    x: number = 0;
    y: number = 0;
    size: number = 0;
    createdAt: number = 0;
    xModifier: number = 0;
    yModifier: number = 0;

    constructor(gameConstants: GameConstants, firstSpawn: boolean) {
        this.gameConstants = gameConstants;
        
        let xSpawnRange = firstSpawn ? this.gameConstants.baseWidth - 200 : this.gameConstants.baseWidth/2 ;
        let ySpawnRange = firstSpawn ? this.gameConstants.baseHeight - 100 : this.gameConstants.baseWidth/2 ;

        this.x = (Math.random() * xSpawnRange) + (this.gameConstants.baseWidth/2 - (xSpawnRange/2));
        this.y = (Math.random() * ySpawnRange) + (this.gameConstants.baseHeight/2 - (ySpawnRange/2));
        this.size = (Math.random() * 2) + 1;
        this.createdAt = Date.now();
    }

    update(ctx: CanvasRenderingContext2D, velocity: number, xSpeed: number): boolean {

        if (this.x < 0 || this.y < 0 || this.x > this.gameConstants.baseWidth || this.y > this.gameConstants.baseHeight) {
            return true;
        }

        ctx.fillStyle = '#eee';
        ctx.strokeStyle = '#eee';
        ctx.lineWidth = this.size /2;

        this.xModifier = (this.x - this.gameConstants.baseWidth/2) / 100;
        this.yModifier = (this.y - this.gameConstants.baseHeight/2) / 100;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);

        this.x += (this.xModifier * velocity) + xSpeed;
        this.y += (this.yModifier * velocity);

        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        //ctx.beginPath();
        //ctx.arc(this.x, this.y, this.size/3, 0, Math.PI * 2);
        //ctx.fill();

        return false;
    }
}