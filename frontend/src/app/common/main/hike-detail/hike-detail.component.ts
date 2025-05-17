/**
 * Component that displays detailed information about a specific hike.
 * Includes description, map view, and related hikes.
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HikeService, Hike } from '../../../services/hike.service';
import { CardComponent } from '../card/card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CardsListComponent } from '../cards-list/cards-list.component';
import { DescriptionMapToggleComponent } from '../description-map-toggle/description-map-toggle.component';
import { DescriptionComponent } from '../description/description.component';
import { MapComponent } from '../map/map.component';

/**
 * @Component decorator that defines the metadata for the hike detail component
 * @property {string} selector - The CSS selector that identifies this component in a template
 * @property {boolean} standalone - Indicates this is a standalone component
 * @property {Array} imports - List of components and modules used in this component
 * @property {string} templateUrl - Path to the component's template file
 * @property {string} styleUrls - Path to the component's styles file
 */
@Component({
  selector: 'app-hike-detail',
  standalone: true,
  imports: [
    CommonModule,
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
  /** The current hike being displayed */
  hike: Hike | undefined;

  /** Currently selected view tab (description or map) */
  selectedTab: 'description' | 'map' = 'description';

  /**
   * Creates an instance of HikeDetailComponent
   * @param route - Angular ActivatedRoute service for accessing route parameters
   * @param hikeService - Service for fetching hike data
   */
  constructor(
    private route: ActivatedRoute,
    private hikeService: HikeService
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized
   * Loads the hike details based on the route parameter
   */
  ngOnInit() {
    // Get the hike ID from the route parameters
    this.route.params.subscribe((params) => {
      const id = +params['id']; // Convert to number

      this.hikeService.getHikeById(id).subscribe({
        next: (hike) => {
          this.hike = hike;
        },
        error: (error) => {
          console.error('Error fetching hike:', error);
        },
      });
    });
  }

  /**
   * Handles tab changes between description and map views
   * @param tab - The selected tab ('description' or 'map')
   */
  onTabChange(tab: string) {
    this.selectedTab = tab as 'description' | 'map';
  }
}
