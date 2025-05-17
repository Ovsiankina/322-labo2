/**
 * Component that displays error pages (e.g., 404 Not Found).
 * Provides a way for users to navigate back to the previous page.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

/**
 * @Component decorator that defines the metadata for the error component
 * @property {string} selector - The CSS selector that identifies this component in a template
 * @property {boolean} standalone - Indicates this is a standalone component
 * @property {Array} imports - List of components and modules used in this component
 * @property {string} templateUrl - Path to the component's template file
 * @property {string} styleUrl - Path to the component's styles file
 */
@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {
  /**
   * Creates an instance of ErrorComponent
   * @param router - Angular Router service for navigation
   */
  constructor(private router: Router) {}

  /**
   * Navigates back to the previous route
   */
  goBack() {
    this.router.navigate(['../']);
  }
}
