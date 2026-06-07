import { Component, inject, input } from '@angular/core';
import { experience } from '../models/experience.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-experience-detials',
  templateUrl: './experience-details.component.html',
  styleUrl: './experience-details.component.css',
  imports: [MatDialogModule, MatButtonModule]
})
export class ExperienceDetailsComponent {

  readonly dialogRef = inject(MatDialogRef<ExperienceDetailsComponent>);
  readonly experience = inject<experience>(MAT_DIALOG_DATA);

  onClose(): void {
    this.dialogRef.close();
  }
}
