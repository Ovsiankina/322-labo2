/**
 * Component that implements the application footer bar.
 * Includes a scroll-to-top button that appears when the user scrolls down the page.
 */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  HostListener,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArrowUpwardComponent } from '../arrow-upward/arrow-upward.component';

/**
 * @Component decorator that defines the metadata for the footer bar component
 * @property {string} selector - The CSS selector that identifies this component in a template
 * @property {string} templateUrl - Path to the component's template file
 * @property {string} styleUrls - Path to the component's styles file
 * @property {boolean} standalone - Indicates this is a standalone component
 * @property {Array} imports - List of components and modules used in this component
 * @property {ChangeDetectionStrategy} changeDetection - Strategy for change detection
 */
@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss'],
  standalone: true,
  imports: [ArrowUpwardComponent, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBarComponent {
  /** Flag indicating whether the scroll-to-top button should be visible */
  showButton = false;

  /**
   * Host listener for window scroll events
   * Shows/hides the scroll-to-top button based on scroll position
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 100;
  }

  /**
   * Scrolls the window smoothly to the top of the page
   */
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
