import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopAppBarExtandedComponent } from './common/header/top-app-bar-extanded/top-app-bar-extanded.component';
import { FooterBarComponent } from './common/footer/footer-bar/footer-bar.component';
import { MatCardModule } from '@angular/material/card';
import { CardsListComponent } from './common/main/cards-list/cards-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TopAppBarExtandedComponent,
    FooterBarComponent,
    RouterOutlet,
    MatCardModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chrome-browser';
}
