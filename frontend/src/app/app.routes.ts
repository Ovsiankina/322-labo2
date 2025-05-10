import { Routes } from '@angular/router';
import { HikeDetailComponent } from './component/hike-detail/hike-detail.component';

export const routes: Routes = [
  { path: 'hikes/:id', component: HikeDetailComponent },
  { path: '', redirectTo: '/hikes/1', pathMatch: 'full' }, // Redirect to first hike for testing
];
