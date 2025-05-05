import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

type State = 'On' | 'Off';

@Component({
  selector: 'app-top-app-bar-extanded',
  templateUrl: './top-app-bar-extanded.component.html',
  styleUrls: ['./top-app-bar-extanded.component.scss'],
  standalone: true,
  imports: [LogoComponent, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAppBarExtandedComponent {
  @Input() connected: State = 'Off';
  @Input() searchBar: State = 'On';
  @Input() noMatct: State = 'Off';
}
