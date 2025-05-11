import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="stars">
      <mat-icon *ngFor="let star of stars" [style.color]="getStarColor(star)">
        {{ getStarIcon(star) }}
      </mat-icon>
    </div>
  `,
  styles: [
    `
      .stars {
        display: flex;
        gap: 2px;
      }
      mat-icon {
        font-size: 20px;
        width: 20px;
        height: 20px;
      }
    `,
  ],
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  getStarColor(star: number): string {
    if (star <= Math.floor(this.rating)) {
      return '#FFD700'; // Étoile pleine
    } else if (star === Math.ceil(this.rating) && this.rating % 1 !== 0) {
      return '#FFD700'; // Demi-étoile
    }
    return '#E0E0E0'; // Étoile vide
  }

  getStarIcon(star: number): string {
    if (star <= Math.floor(this.rating)) {
      return 'star'; // Étoile pleine
    } else if (star === Math.ceil(this.rating) && this.rating % 1 !== 0) {
      return 'star_half'; // Demi-étoile
    }
    return 'star_border'; // Étoile vide
  }
}
