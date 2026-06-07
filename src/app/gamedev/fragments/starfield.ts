import { GameConstants } from "../constants/game-constants";
import { starFragment } from "./star-fragment"


export class starfield {
    gameConstants: GameConstants;
    stars: starFragment[] = [];

    initialAnimationPlayed: boolean = false;

    currentVelocity: number = 10;
    velocity: number = 10;
    maxStars: number = 200;
    ageInSeconds: number = 0;
    maxSpeed: number = 30;
    xSpeed: number = 0;

    accelerating: boolean = false;
    stopping: boolean = false;

    turningLeft: boolean = false;
    turningRight: boolean = false;

    constructor(gameConstants: GameConstants) {
        this.gameConstants = gameConstants;

        for (var i = 0; i < this.maxStars; i++) {
            this.stars.push(new starFragment(gameConstants, true));
        }
    }

    accelerate() {
        console.log('accelerating');
        this.ageInSeconds = 0;
        this.accelerating = true;
    }

    stop() {
        console.log('stoping');
        this.ageInSeconds = 0;
        this.accelerating = false;
        this.stopping = true;
    }

    turnLeft(isTurning: boolean) {
        this.accelerating = false;
        this.ageInSeconds = 0;
        this.turningLeft = isTurning;
    }

    turnRight(isTurning: boolean) {
        this.accelerating = false;
        this.ageInSeconds = 0;
        this.turningRight = isTurning;
    }

    update(ctx: CanvasRenderingContext2D, deltaTime: number){
        this.ageInSeconds += deltaTime / 1000;

        if (!this.initialAnimationPlayed) {
            this.playInitialAnimation();
        } else if (this.accelerating) {
            this.velocity = Math.min(((this.ageInSeconds) / 3) * this.maxSpeed, 20);
            this.currentVelocity = this.velocity;
        } else if (this.stopping) {
            this.velocity = Math.max(this.currentVelocity - (((this.ageInSeconds) / 1) * this.maxSpeed), .4);
            if (this.ageInSeconds > 1) {
                this.stopping = false;
                this.ageInSeconds = 0;
            }
        } else if (this.turningLeft) {
            this.xSpeed = Math.min(((this.ageInSeconds) / 1) * 3, 8);
        } else if (this.turningRight) {
            this.xSpeed = -Math.min(((this.ageInSeconds) / 1) * 3, 8);
        } else if (this.xSpeed > 0) {
            this.xSpeed -= .3;
        } else if (this.xSpeed < 0){
            this.xSpeed += .3;
        } else {
            this.xSpeed = 0;
            this.velocity = .4;
        }
        

        for (var i = 0; i < this.stars.length; i++) {
            if (this.stars[i].update(ctx, this.velocity, this.xSpeed)) {
                this.stars.splice(i, 1);
                i--;
            };
        }

        if (this.stars.length < this.maxStars) {
            for (var i = this.stars.length; i < this.maxStars; i++) {
                this.stars.push(new starFragment(this.gameConstants, false));
            }
        }
    }

    playInitialAnimation() {
        if (this.ageInSeconds < 1) {
            this.velocity = .3;
        } else if (this.ageInSeconds < 4) {
            this.velocity = ((this.ageInSeconds - 1) / 3) * 20;
        } else if (this.ageInSeconds < 6) {
            this.velocity = 20;
        } else if (this.ageInSeconds < 7) {
            let progress = ((this.ageInSeconds - 6) / 1) * 20;
            this.velocity = Math.max(20 - progress, .4);
        } else {
            this.velocity = .3;
            this.initialAnimationPlayed = true;
        }
    }
}