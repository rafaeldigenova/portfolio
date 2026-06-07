import { Routes } from '@angular/router';
import { GameDevGuard } from './gamedev/gamedev.guard';
import { FullStackComponent } from './fullstack/fullstack.component';
import { GamedevComponent } from './gamedev/gamedev.component';

export const routes: Routes = [
    {
        path: '', 
        children: [
            {
                path: 'fullstack',
                component: FullStackComponent
            },
            {
                path: 'gamedev',
                component: GamedevComponent,
                canDeactivate: [GameDevGuard]
            }
        ]
    }, 
    
];
