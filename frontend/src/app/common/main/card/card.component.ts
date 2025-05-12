import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Hike, HikeService } from '../../../services/hike.service';
import { MatDividerModule } from '@angular/material/divider';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatDividerModule,
    StarRatingComponent,
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() hikeId: number = 0;
  hike: Hike | null = null;

  constructor(private hikeService: HikeService) {}

  ngOnInit() {
    if (this.hikeId) {
      this.hikeService.getHikeById(this.hikeId).subscribe({
        next: (data) => {
          this.hike = data;
        },
        error: (error) => {
          console.error(
            'Erreur lors de la récupération de la randonnée:',
            error
          );
        },
      });
    }
  }
}
