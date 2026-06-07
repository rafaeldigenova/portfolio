import { GameConstants } from "../constants/game-constants";


export class logoState {
    showLogoDelay = 7;
    showLogoFadeIn = 1.5;
    showLogoNameFadeIn = 1;
    showLogoFadeOutTime = 3;
    showLogoElapsedTime = 0;
    gameConstants: GameConstants;

    constructor(gameConstants: GameConstants) {
        this.gameConstants = gameConstants;
    };

    update(ctx: CanvasRenderingContext2D, deltaTime: number):boolean {
        this.showLogoElapsedTime += deltaTime / 1000;
        let elapsedTime = this.showLogoElapsedTime - this.showLogoDelay;

        let elapsedTimeAfterFadeOutTime = elapsedTime - this.showLogoFadeOutTime;
        let progressFadeOut = elapsedTime > this.showLogoFadeOutTime ? Math.min(elapsedTimeAfterFadeOutTime / 2, 1) : 0;
        let progressFadeIn = Math.min(elapsedTime / this.showLogoFadeIn, 1) - progressFadeOut;
        let elapsedTimeAfterFadeIn = elapsedTime - this.showLogoFadeIn;
        let progressFadeInName = Math.min(elapsedTimeAfterFadeIn / this.showLogoNameFadeIn, 1) - progressFadeOut;
        
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        ctx.fillStyle = "rgba(240, 240, 240, " + progressFadeIn + ")";
        ctx.font = '144px Brush Script MT';
        ctx.fillText("GR",this.gameConstants.baseWidth/2,this.gameConstants.baseHeight/2 - 70);

        ctx.fillStyle = "rgba(240, 240, 240, " + progressFadeInName + ")";
        ctx.font = '32px Brush Script MT'
        ctx.fillText("Galaxy Reapers Studio", this.gameConstants.baseWidth/2, this.gameConstants.baseHeight/2);

        ctx.globalAlpha = 1;

        if (progressFadeOut == 1) {
            return true;
        }
        return false;
    }
}