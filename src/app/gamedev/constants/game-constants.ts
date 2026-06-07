import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root' 
})
export class GameConstants {
    baseWidth: number = 1900;
    baseHeight: number = 1080;
    xRatio: number = 0;
    yRatio: number = 0;
    bgColor: string = '#111';

    setupCanvasRatio (canvasWidth: number, canvasHeight: number) {
        this.xRatio = this.baseWidth / canvasWidth;
        this.yRatio = this.baseHeight / canvasHeight;
    }
};