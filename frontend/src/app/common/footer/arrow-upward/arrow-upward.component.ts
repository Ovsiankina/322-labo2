/**
 * Component that displays an upward arrow icon.
 * Used in the footer for the scroll-to-top functionality.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @Component decorator that defines the metadata for the arrow upward component
 * @property {string} selector - The CSS selector that identifies this component in a template
 * @property {string} templateUrl - Path to the component's template file
 * @property {string} styleUrls - Path to the component's styles file
 * @property {boolean} standalone - Indicates this is a standalone component
 * @property {Array} imports - List of components and modules used in this component
 * @property {ChangeDetectionStrategy} changeDetection - Strategy for change detection
 */
@Component({
  selector: 'app-arrow-upward',
  templateUrl: './arrow-upward.component.html',
  styleUrls: ['./arrow-upward.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowUpwardComponent {
  /** Input property that determines the state of the arrow ('On' or 'Off') */
  @Input() selected: 'On' | 'Off' = 'Off';
}
