import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopAppBarExtandedComponent } from './common/header/top-app-bar-extanded/top-app-bar-extanded.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    /* RouterOutlet ,*/
    TopAppBarExtandedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chrome-browser';
}
