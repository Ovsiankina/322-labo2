import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  @Input() style: 'Filled' | 'Outlined' | 'Standard' | 'Tonal' = 'Outlined';
  @Input() state: 'Enabled' | 'Hovered' | 'Focused' | 'Pressed' | 'Disabled' =
    'Enabled';
}
