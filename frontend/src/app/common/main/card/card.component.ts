import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
export class CardComponent implements OnInit {
  @Input() hikeId: number = 0;
  @Input() isSelected: boolean = false;
  @Output() hikeSelected = new EventEmitter<Hike>();
  hike: Hike | null = null;
  isCardSelected: boolean = false;

  constructor(private hikeService: HikeService, private router: Router) {}

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

  selectHike(hike: Hike) {
    this.isCardSelected = !this.isCardSelected;
    this.hikeSelected.emit(hike);
    this.router.navigate(['/hike', hike.id]);
  }
}
