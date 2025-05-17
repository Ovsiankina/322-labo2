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
