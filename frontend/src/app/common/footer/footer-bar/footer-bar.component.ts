import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input() connected: 'Off' | 'On' = 'Off';
}
