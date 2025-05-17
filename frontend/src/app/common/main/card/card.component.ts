import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
  @Input() isSelected: boolean = false;
  @Output() cardClick = new EventEmitter<Hike>();
  hike: Hike | null = null;

  /**
   * Creates an instance of CardComponent
   * @param hikeService - Service for fetching hike data
   */
  constructor(private hikeService: HikeService) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized
   * Loads the hike data based on the hikeId input
   */
  ngOnInit() {
    if (this.hikeId) {
      this.hikeService.getHikeById(this.hikeId).subscribe({
        next: (data) => {
          this.hike = data;
        },
        error: (error) => {
          console.error('Error loading hike:', error);
        },
      });
    }
  }

  /**
   * Handles the selection of a hike
   * @param hike - The selected hike object
   */
  selectHike(hike: Hike) {
    if (!hike) return;
    this.cardClick.emit(hike);
  }
}
