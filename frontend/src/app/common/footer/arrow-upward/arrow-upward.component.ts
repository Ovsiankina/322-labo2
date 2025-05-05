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
  @Input() selected: 'On' | 'Off' = 'Off';
}
