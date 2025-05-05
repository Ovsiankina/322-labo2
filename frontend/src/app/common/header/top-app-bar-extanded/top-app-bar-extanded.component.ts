import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { AccountCircleComponent } from '../account-circle/account-circle.component';
@Component({
  selector: 'app-top-app-bar-extanded',
  templateUrl: './top-app-bar-extanded.component.html',
  styleUrls: ['./top-app-bar-extanded.component.scss'],
  standalone: true,
  imports: [
    LogoComponent,
    IconButtonComponent,
    AccountCircleComponent,
    FormsModule,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAppBarExtandedComponent {
  @Input() connected: 'Off' | 'On' = 'Off';
  @Input() searchBar: 'Off' | 'On' = 'On';
  @Input() oneFilter: 'Off' | 'On' = 'Off';
  @Input() twoFilters: 'Off' | 'On' = 'Off';
  @Input() noMatct: 'Off' | 'On' = 'Off';
}
