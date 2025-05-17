/**
 * Main application component that serves as the root component of the Angular application.
 * This component manages the overall layout structure including the header, main content area,
 * and footer components.
 */
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopAppBarExtandedComponent } from './common/header/top-app-bar-extanded/top-app-bar-extanded.component';
import { FooterBarComponent } from './common/footer/footer-bar/footer-bar.component';
import { MatCardModule } from '@angular/material/card';
import { CardsListComponent } from './common/main/cards-list/cards-list.component';

/**
 * @Component decorator that defines the metadata for the root component
 * @property {string} selector - The CSS selector that identifies this component in a template
 * @property {boolean} standalone - Indicates this is a standalone component
 * @property {Array} imports - List of components and modules used in this component
 * @property {string} templateUrl - Path to the component's template file
 * @property {string} styleUrls - Path to the component's styles file
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopAppBarExtandedComponent,
    FooterBarComponent,
    RouterOutlet,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /** Title of the application displayed in the browser */
  title = 'chrome-browser';
}
