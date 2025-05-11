import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HikeService, Hike } from '../../services/hike.service';
import { CardComponent } from '../../common/main/card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { StarRatingComponent } from '../../common/main/star-rating/star-rating.component';
import { CardsListComponent } from '../../common/main/cards-list/cards-list.component';
import { DescriptionMapToggleComponent } from '../../common/main/description-map-toggle/description-map-toggle.component';
import { DescriptionComponent } from '../../common/main/description/description.component';
import { MapComponent } from '../../common/main/map/map.component';

@Component({
  selector: 'app-hike-detail',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatBadgeModule,
    MatButtonModule,
    MatChipsModule,
    StarRatingComponent,
    CardsListComponent,
    DescriptionMapToggleComponent,
    DescriptionComponent,
    MapComponent,
  ],
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.scss'],
})
export class HikeDetailComponent implements OnInit {
  hike: Hike | undefined;
  selectedTab: 'description' | 'map' = 'description';

  constructor(private route: ActivatedRoute, private hikeService: HikeService) {
    console.log('HikeDetailComponent constructor called');
  }

  ngOnInit() {
    console.log('HikeDetailComponent ngOnInit called');

    // Get the hike ID from the route parameters
    this.route.params.subscribe((params) => {
      const id = +params['id']; // Convert to number
      console.log('Route params received, hike ID:', id);

      this.hikeService.getHikeById(id).subscribe({
        next: (hike) => {
          console.log('Hike data received:', hike);
          this.hike = hike;
        },
        error: (error) => {
          console.error('Error fetching hike:', error);
        },
      });
    });
  }

  onTabChange(tab: string) {
    console.log('Tab changed to:', tab);
    this.selectedTab = tab as 'description' | 'map';
  }
}
