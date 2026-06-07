import { Component, signal } from '@angular/core';
import { FullStackService } from './fullstack.service';
import { experience } from '../shared/models/experience.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { ExperiencesListComponent } from '../shared/experiences-list/experience.component';

@Component({
  selector: 'app-fullstack-component',
  templateUrl: './fullstack.component.html',
  styleUrl: './fullstack.component.css',
  imports: [ ExperiencesListComponent, MatProgressSpinnerModule, MatTabsModule],
  providers: [ FullStackService ]
})
export class FullStackComponent {
  public readonly isLoading = signal<boolean>(true);
  public readonly experiences = signal<experience[]>([]);

  constructor(fullStackService: FullStackService) {
    fullStackService.getExperiences().subscribe(data => {
      this.isLoading.set(false);
      this.experiences.set(data);
    });
  }
}
