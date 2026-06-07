import { Component, DestroyRef, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { delay, filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {
  protected readonly isRootPath = signal<boolean>(false);
  protected readonly isFullStackPath = signal<boolean>(false);
  protected readonly isGameDevPath = signal<boolean>(false);
  protected readonly fadingToSkillset = signal<boolean>(false);
  protected readonly fadingToCover = signal<boolean>(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      takeUntilDestroyed(this.destroyRef),
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isRootPath.set(event.urlAfterRedirects === '/');
      this.isFullStackPath.set(event.urlAfterRedirects.includes('fullstack'));
      this.isGameDevPath.set(event.urlAfterRedirects.includes('gamedev'));
    });
  }

  protected goToRoute(route: string) {
    if (this.isRootPath() && route !== '/') {
      this.fadeToSkillset(route);
    }
    else if (!this.isRootPath() && route === '/') {
      this.fadeToCover(route);
    } else {
      this.router.navigate([route]);
    }
  }

  protected fadeToCover(route: string) {
    this.fadingToCover.set(true);
    setTimeout(() => {
      this.isRootPath.set(true);
      this.router.navigate([route]);
      setTimeout(() => {
        this.fadingToCover.set(false)
      }, 500)
    }, 500);
  }

  protected fadeToSkillset(route: string) {
    this.fadingToSkillset.set(true);
    setTimeout(() => {
      this.isRootPath.set(false);
      this.router.navigate([route]);
      setTimeout(() => {
        this.fadingToSkillset.set(false)
      }, 500)
    }, 500);
  }

}
