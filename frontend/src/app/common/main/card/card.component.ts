import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HikeDetailComponent } from '../../../component/hike-detail/hike-detail.component';
import { Hike, HikeService } from '../../../services/hike.service';

interface Canton {
  name: string;
  badge: string;
}

interface Elevation {
  positive_elevation: string;
  negative_elevation: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    HikeDetailComponent,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
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
