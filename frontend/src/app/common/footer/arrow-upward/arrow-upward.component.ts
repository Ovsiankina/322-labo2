/**
 * Component that displays an upward arrow icon.
 * Used in the footer for the scroll-to-top functionality.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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
