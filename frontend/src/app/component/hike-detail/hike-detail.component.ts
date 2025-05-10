import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HikeService, Hike } from '../../services/hike.service';
@Component({
  selector: 'app-hike-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.scss'],
})
export class HikeDetailComponent implements OnInit {
  hike: Hike | undefined;

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
}
