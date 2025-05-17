/**
 * Component that displays a list of hike cards.
 * This component can be used both as a standalone list view and within the detail view.
 */
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HikeService, Hike } from '../../../services/hike.service';

/**
 * @Component decorator that defines the metadata for the cards list component
 * @property {string} selector - The CSS selector that identifies this component in a template
 * @property {boolean} standalone - Indicates this is a standalone component
 * @property {Array} imports - List of components and modules used in this component
 * @property {string} templateUrl - Path to the component's template file
 * @property {string} styleUrl - Path to the component's styles file
 */
@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent, CommonModule, MatIconModule],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent implements OnInit {
  /** Flag indicating whether the component is being used in detail view mode */
  @Input() isDetailView: boolean = false;

  /** Array of hike objects to be displayed */
  hikes: Hike[] = [];

  /** ID of the currently selected hike */
  selectedHikeId: number | null = null;

  /**
   * Creates an instance of CardsListComponent
   * @param router - Angular Router service for navigation
   * @param route - Angular ActivatedRoute service for accessing route parameters
   * @param hikeService - Service for fetching hike data
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hikeService: HikeService
  ) {}

  /**
   * Lifecycle hook that is called after data-bound properties are initialized
   * Loads the list of hikes and subscribes to route parameter changes
   */
  ngOnInit() {
    console.log('CardsListComponent initialized');

    // Fetch all hikes from the service
    this.hikeService.getAllHikes().subscribe({
      next: (data) => {
        this.hikes = data;
        console.log('Hikes loaded:', this.hikes);
      },
      error: (error) => {
        console.error('Error loading hikes:', error);
      },
    });

    // Subscribe to route parameter changes to update selection state
    this.route.params.subscribe((params) => {
      console.log('Route params changed:', params);
      if (params['id']) {
        this.selectedHikeId = +params['id']; // Convert to number
        console.log('Selected hike ID updated:', this.selectedHikeId);
      } else {
        this.selectedHikeId = null;
        console.log('Selected hike ID cleared');
      }
    });
  }

  /**
   * Handles the selection of a hike
   * @param hike - The selected hike object
   */
  selectHike(hike: Hike) {
    console.log('CardsList: Selecting hike:', hike.id);
    this.selectedHikeId = hike.id;
    this.router.navigate(['/hike', hike.id]);
  }

  /**
   * Navigates back to the previous route
   */
  goBack() {
    this.router.navigate(['../']);
  }
}
