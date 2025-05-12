import { Routes } from '@angular/router';
import { CardsListComponent } from './common/main/cards-list/cards-list.component';
import { HikeDetailComponent } from './component/hike-detail/hike-detail.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  { path: '', component: CardsListComponent },
  { path: 'hike/:id', component: HikeDetailComponent },
  { path: '**', component: ErrorComponent },
];
