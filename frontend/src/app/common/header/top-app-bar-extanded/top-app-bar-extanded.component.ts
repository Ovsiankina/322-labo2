/**
 * Component that implements an extended top application bar.
 * This component serves as the main navigation header of the application.
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../logo/logo.component';

/**
 * Type definition for component state
 * @typedef {'On' | 'Off'} State
 */
type State = 'On' | 'Off';

/**
 * @Component decorator that defines the metadata for the top app bar component
 * @property {string} selector - The CSS selector that identifies this component in a template
 * @property {string} templateUrl - Path to the component's template file
 * @property {string} styleUrls - Path to the component's styles file
 * @property {boolean} standalone - Indicates this is a standalone component
 * @property {Array} imports - List of components and modules used in this component
 * @property {ChangeDetectionStrategy} changeDetection - Strategy for change detection
 */
@Component({
  selector: 'app-top-app-bar-extanded',
  templateUrl: './top-app-bar-extanded.component.html',
  styleUrls: ['./top-app-bar-extanded.component.scss'],
  standalone: true,
  imports: [LogoComponent, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopAppBarExtandedComponent {}
