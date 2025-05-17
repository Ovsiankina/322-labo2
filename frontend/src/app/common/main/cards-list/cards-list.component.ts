import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Router, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HikeService, Hike } from '../../../services/hike.service';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CardComponent, CommonModule, MatIconModule],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss',
})
export class CardsListComponent implements OnInit {
  @Input() isDetailView: boolean = false;
  hikes: Hike[] = [];
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
    // Fetch all hikes from the service
    this.hikeService.getAllHikes().subscribe({
      next: (data) => {
        this.hikes = data;
      },
      error: (error) => {
        console.error('Error loading hikes:', error);
      },
    });

    // Subscribe to route parameter changes to update selection state
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.selectedHikeId = +params['id']; // Convert to number
      } else {
        this.selectedHikeId = null;
      }
    });
  }

  /**
   * Handles the selection of a hike
   * @param hike - The selected hike object
   */
  selectHike(hike: Hike) {
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
