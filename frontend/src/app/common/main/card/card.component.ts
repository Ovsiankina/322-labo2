import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
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
export class CardComponent implements OnInit, OnChanges {
  @Input() hikeId: number = 0;
  @Input() isSelected: boolean = false;
  @Output() cardClick = new EventEmitter<Hike>();
  hike: Hike | null = null;

  constructor(
    private hikeService: HikeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('CardComponent initialized with hikeId:', this.hikeId);
    if (this.hikeId) {
      this.hikeService.getHikeById(this.hikeId).subscribe({
        next: (data) => {
          this.hike = data;
          console.log('Hike data loaded:', this.hike);
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isSelected']) {
      console.log('isSelected changed:', this.isSelected);
    }
  }

  selectHike(hike: Hike) {
    if (!hike) return;
    console.log('Card: Emitting click event for hike:', hike.id);
    this.cardClick.emit(hike);
  }
}
