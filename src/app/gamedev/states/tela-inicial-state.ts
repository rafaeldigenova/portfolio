import { ImageLoader } from "../image-loader/image-loader";
import { GameConstants } from "../constants/game-constants";
import { inject } from '@angular/core';
import { starfield } from "../fragments/starfield";
import { ClickableElement } from "../elements/clickable-element";



export class telaInicialState {
    gameConstants: GameConstants;
    imageLoader: ImageLoader;
    starfield: starfield;
    canvas: HTMLCanvasElement;
    clickableElements: ClickableElement[] = []; 

    elapsedSeconds = 0;
    enterCockpitAnimationDuration = 3;
    enteringShip: boolean = true;
    imageWidth: number = 0;
    imageHeight: number = 0;

    cockpitImage: HTMLImageElement;

    constructor(gameConstants: GameConstants, imageLoader: ImageLoader, starfield: starfield, canvas: HTMLCanvasElement) {
        this.gameConstants = gameConstants;
        this.imageLoader = imageLoader;
        this.canvas = canvas
        this.starfield = starfield;

        this.cockpitImage = this.imageLoader.getLoadedImage('/base_cockpit.png')!;
        if (this.cockpitImage.naturalHeight !== 0) {
            this.imageHeight = this.cockpitImage.naturalHeight;
            this.imageWidth = this.cockpitImage.naturalWidth;
        } else {
            this.cockpitImage.onload = () => {
                this.imageHeight = this.cockpitImage.naturalHeight;
                this.imageWidth = this.cockpitImage.naturalWidth;
            }
        }
    };

    setup() {
        this.enteringShip = true;
        this.elapsedSeconds = 0;

        this.clickableElements.push(new ClickableElement(150, 35, 295, 170, () => this.starfield.accelerate(), () => this.starfield.stop()));
        this.clickableElements.push(new ClickableElement(180, 725, 160, 160, () => this.starfield.turnLeft(true), () => this.starfield.turnLeft(false)));
        this.clickableElements.push(new ClickableElement(1580, 720, 150, 160, () => this.starfield.turnRight(true), () => this.starfield.turnRight(false)));
        
        this.canvas.addEventListener('mousedown', (e) => this.mousedown(e));
        this.canvas.addEventListener('mouseup', (e) => this.mouseup(e))
        this.canvas.addEventListener('mousemove', (e) => this.mousemove(e));
    }

    teardown() {

    }

    update(ctx: CanvasRenderingContext2D, deltaTime: number):boolean {
        if (this.imageHeight === 0) return false;

        this.elapsedSeconds += deltaTime/1000;

        this.starfield.update(ctx, deltaTime);

        if (this.enteringShip) 
        {
            this.enterShip(ctx);
        } 
        else {
            ctx.drawImage(this.cockpitImage, 0, 0, this.imageWidth, this.imageHeight , 0, 0, this.gameConstants.baseWidth, this.gameConstants.baseHeight);
        }
        
        return false;
    }

    enterShip(ctx: CanvasRenderingContext2D) {
        let progress = this.elapsedSeconds / this.enterCockpitAnimationDuration;

        let clipStartX = (this.imageWidth / 2) - ((this.imageWidth / 2) * progress);
        let clipStartY = (this.imageHeight / 2) - ((this.imageHeight / 2) * progress);

        let clipWidth = this.imageWidth * progress;
        let clipHeight = this.imageHeight * progress;

        ctx.drawImage(this.cockpitImage, clipStartX, clipStartY, clipWidth, clipHeight , 0, 0, this.gameConstants.baseWidth, this.gameConstants.baseHeight);  

        if (this.elapsedSeconds > this.enterCockpitAnimationDuration) {
            this.enteringShip = false;
            this.elapsedSeconds = 0;
        }
    }

    mousedown(e: MouseEvent) {
        this.clickableElements.forEach((clickableElement) => {
            if (clickableElement.isHovered(e.x * this.gameConstants.xRatio, e.y * this.gameConstants.yRatio)) {
                clickableElement.mousedown();
            }
        });
    }

    mouseup(e: MouseEvent) {
        this.clickableElements.forEach((clickableElement) => {
            if (clickableElement.isHovered(e.x * this.gameConstants.xRatio, e.y * this.gameConstants.yRatio)) {
                clickableElement.mouseup();
            }
        });
    }

    mousemove(e: MouseEvent) {
        this.canvas.style.cursor = 'default';

        this.clickableElements.forEach((clickableElement) => {
            if (clickableElement.isHovered(e.x * this.gameConstants.xRatio, e.y * this.gameConstants.yRatio)) {
                this.canvas.style.cursor = 'pointer';
                clickableElement.hover();
            } else {
                clickableElement.leave();
            }
        })
    }
}