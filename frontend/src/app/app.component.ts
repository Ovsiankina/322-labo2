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
  title = 'Passé simple';
}
