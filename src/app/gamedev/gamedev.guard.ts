import { Observable } from "rxjs";
import { GamedevComponent } from "./gamedev.component";
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class GameDevGuard implements CanDeactivate<GamedevComponent> {
  
  canDeactivate(component: GamedevComponent): Observable<boolean> | boolean {
    // If the component has the check method, execute it
    if (component.canLeave) {
      return component.canLeave();
    }
    return true;
  }
}