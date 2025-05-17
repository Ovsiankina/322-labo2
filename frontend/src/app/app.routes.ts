/**
 * Application routing configuration file.
 * Defines the routes and their corresponding components for the application.
 */
import { Routes } from '@angular/router';
import { CardsListComponent } from './common/main/cards-list/cards-list.component';
import { HikeDetailComponent } from './common/main/hike-detail/hike-detail.component';
import { ErrorComponent } from './error/error.component';

/**
 * Application routes configuration
 * @type {Routes}
 * @property {string} path - The URL path for the route
 * @property {Component} component - The component to be displayed for the route
 */
export const routes: Routes = [
  { path: '', component: CardsListComponent },
  { path: 'hike/:id', component: HikeDetailComponent },
  { path: '**', component: ErrorComponent },
];
