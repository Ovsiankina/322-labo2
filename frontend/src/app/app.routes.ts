import { Routes } from '@angular/router';
import { CardsListComponent } from './common/main/cards-list/cards-list.component';
import { HikeDetailComponent } from './component/hike-detail/hike-detail.component';

export const routes: Routes = [
  { path: '', component: CardsListComponent },
  { path: 'hikes', component: CardsListComponent },
  { path: 'hikes/:id', component: HikeDetailComponent },
];
