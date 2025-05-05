import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopAppBarExtandedComponent } from './common/header/top-app-bar-extanded/top-app-bar-extanded.component';
import { FooterBarComponent } from './common/footer/footer-bar/footer-bar.component';
import { CardComponent } from './common/main/card/card.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    /* RouterOutlet ,*/
    TopAppBarExtandedComponent,
    FooterBarComponent,
    CardComponent,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chrome-browser';
}
