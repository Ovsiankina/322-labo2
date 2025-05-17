/**
 * Component that implements an extended top application bar.
 * This component serves as the main navigation header of the application.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-top-app-bar-extanded',
  templateUrl: './top-app-bar-extanded.component.html',
  styleUrls: ['./top-app-bar-extanded.component.scss'],
  standalone: true,
  imports: [LogoComponent, FormsModule, CommonModule],
})
export class TopAppBarExtandedComponent {}
