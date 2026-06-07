import { Component, input } from '@angular/core';
import { experience } from '../models/experience.interface';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-experiences-list',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  imports: [ExperienceComponent]
})
export class ExperiencesListComponent {

  public readonly title = input<string>('Experiences');
  public readonly experiences = input.required<experience[]>();

}
