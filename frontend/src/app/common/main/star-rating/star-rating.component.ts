import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  getStarColor(star: number): string {
    if (star <= Math.floor(this.rating)) {
      return '#FFD700';
    } else if (star === Math.ceil(this.rating) && this.rating % 1 !== 0) {
      return '#FFD700';
    }
    return '#E0E0E0';
  }

  getStarIcon(star: number): string {
    if (star <= Math.floor(this.rating)) {
      return 'star';
    } else if (star === Math.ceil(this.rating) && this.rating % 1 !== 0) {
      return 'star_half';
    }
    return 'star_border';
  }
}
