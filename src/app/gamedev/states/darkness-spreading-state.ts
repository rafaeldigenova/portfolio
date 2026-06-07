import { GameConstants } from "../constants/game-constants";


export class darkenssSpreadingState {
    darknessElapsedTime: number = 0;
    darknessDuration: number = 1.2;
    darknessTimeToNextStep: number = .5;
    darknessCirclePoints: number = 20;
    gameConstants: GameConstants;

    constructor(gameConstants: GameConstants) {
        this.gameConstants = gameConstants;
    };

    resetElapsedTime() {
        this.darknessElapsedTime = 0;
    }

    update(ctx: CanvasRenderingContext2D, deltaTime: number, backwards: boolean = false):boolean {
        ctx.clearRect(0, 0, this.gameConstants.baseWidth, this.gameConstants.baseHeight);
        
        this.darknessElapsedTime += deltaTime / 1000;
        let progress = (this.darknessElapsedTime / this.darknessDuration);
        
        let x = 35;
        let y = 125;
        
        let width = this.gameConstants.baseWidth * progress;
        
        if (backwards) {
            width = Math.max(this.gameConstants.baseWidth - (this.gameConstants.baseWidth * progress), 0);
            console.log(`width: ${width}`);
        }
        
        ctx.save();
        ctx.fillStyle = this.gameConstants.bgColor;
        ctx.filter = "blur(4px)"

        ctx.beginPath();
        ctx.arc(x, y, width, 0, 2 * Math.PI);
        ctx.fill();

        ctx.restore();
        if (this.darknessElapsedTime > this.darknessDuration + this.darknessTimeToNextStep) { 
            return true;
        }
        return false;
    }
}