import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { experience } from '../shared/models/experience.interface';
import { fullStackExperiences } from '../shared/const/experience.const';


@Injectable()
export class FullStackService {
  getExperiences(): Observable<experience[]>{
    return of(fullStackExperiences)
      .pipe(
        // Simulate a delay for demonstration purposes
        delay(1000)
      );
  }
}
