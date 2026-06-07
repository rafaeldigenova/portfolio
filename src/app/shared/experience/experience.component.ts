import { Component, inject, input } from '@angular/core';
import { experience } from '../models/experience.interface';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceDetailsComponent } from '../experience-details/experience-details.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  imports: []
})
export class ExperienceComponent {

  readonly dialog = inject(MatDialog);

  public readonly experience = input.required<experience>();

  protected openDetails() {
    console.log("teste");
    const dialogRef = this.dialog.open(ExperienceDetailsComponent, {
      data: this.experience()
    });
  }

}
