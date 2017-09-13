import { Routes } from '@angular/router';
import { WebRootComponent } from './web.root.component';

export const APP_ROUTES: Routes = [
    { path: '', component: WebRootComponent, pathMatch: 'full' }
];