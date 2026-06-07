import { AfterViewInit, Component, ElementRef, inject, OnDestroy, signal, ViewChild } from '@angular/core';
import { experience } from '../shared/models/experience.interface';
import { ExperienceComponent } from '../shared/experience/experience.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { delay, Observable, of, timestamp } from 'rxjs';
import { GameConstants as GameConstants } from './constants/game-constants';
import { darkenssSpreadingState } from './states/darkness-spreading-state';
import { telaInicialState } from './states/tela-inicial-state';
import { logoState } from './states/logo-state';
import { starfield } from './fragments/starfield';
import { ImageLoader } from './image-loader/image-loader';

@Component({
  selector: 'app-gamedev.component',
  templateUrl: './gamedev.component.html',
  styleUrl: './gamedev.component.css',
  imports: [ MatProgressSpinnerModule ],
  providers: [ GameConstants,  ]
})
export class GamedevComponent implements AfterViewInit{

  @ViewChild('backgroundCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D | null;
  
  private lastDrawTime = 0;
  private readonly TARGET_FPS = 30;
  private readonly MIN_INTERVAL = 1000 / this.TARGET_FPS;

  private gameState = 'darkness-spreading';
  private darknessState: darkenssSpreadingState | null = null;
  private logo: logoState | null = null;
  private telaInicial: telaInicialState | null = null;
  private starfield: starfield | null = null;

  private gameConstants = inject(GameConstants);
  private imageLoader = inject(ImageLoader);
  
  canLeave(): Observable<boolean> {
    this.darknessState!.resetElapsedTime();
    this.gameState = 'darkness-retreating';

    return of(true).pipe(
      delay(1500)
    );
  }

  ngAfterViewInit(): void {
    const canvasEl: HTMLCanvasElement = this.canvasRef.nativeElement;
    this.ctx = canvasEl.getContext('2d');

    if (this.ctx) {
      this.gameConstants.setupCanvasRatio(this.canvasRef.nativeElement.getBoundingClientRect().width, this.canvasRef.nativeElement.getBoundingClientRect().height);
      this.imageLoader.loadImages();
      this.darknessState = new darkenssSpreadingState(this.gameConstants);
      this.logo = new logoState(this.gameConstants);
      this.starfield = new starfield(this.gameConstants);
      this.telaInicial = new telaInicialState(this.gameConstants, this.imageLoader, this.starfield, canvasEl);
      
      this.lastDrawTime = Date.now();
      this.gameLoop();
    }
  }

  gameLoop() {
    if (!this.ctx) return;
    requestAnimationFrame(() => this.gameLoop());

    let timestamp = Date.now();
    let deltaTime = timestamp - this.lastDrawTime;

    // Skip the frame if it's too soon
    if (deltaTime < this.MIN_INTERVAL) {
      return; 
    }
    
    switch(this.gameState) {
      case 'darkness-spreading':
        let finishedDarknessState = this.darknessState!.update(this.ctx, deltaTime);
        this.starfield?.update(this.ctx, 0);
        if (finishedDarknessState) this.gameState = 'show-logo';
        break;
      case 'darkness-retreating':
        let finishedDarknessRetratState = this.darknessState!.update(this.ctx, deltaTime, true);
        this.starfield?.update(this.ctx, deltaTime);
        if (finishedDarknessRetratState) this.ctx = null;
        break;
      case 'show-logo':
        this.drawBg();
        this.starfield?.update(this.ctx, deltaTime);
        let finishedLogoState = this.logo!.update(this.ctx, deltaTime);
        if (finishedLogoState) { 
          this.gameState = 'tela-inicial'
          this.telaInicial!.setup();
        };
        break;
      case 'tela-inicial':
        this.drawBg();
        let finishedTelaInicialState = this.telaInicial!.update(this.ctx, deltaTime);
        if (finishedTelaInicialState) this.gameState = 'tela-inicial';
        break;
    }

    this.lastDrawTime = timestamp;
  }

  drawBg() {
    this.ctx!.clearRect(0, 0, this.gameConstants!.baseWidth, this.gameConstants!.baseHeight);
    this.ctx!.fillStyle = this.gameConstants!.bgColor;
    this.ctx!.fillRect(0, 0, this.gameConstants!.baseWidth, this.gameConstants!.baseHeight);
  }
}
