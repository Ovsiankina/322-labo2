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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private hikeService: HikeService
  ) {}

  ngOnInit() {
    console.log('CardsListComponent initialized');

    this.hikeService.getAllHikes().subscribe({
      next: (data) => {
        this.hikes = data;
        console.log('Hikes loaded:', this.hikes);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des randonnées:', error);
      },
    });

    // S'abonner aux changements de l'URL pour mettre à jour l'état de sélection
    this.route.params.subscribe((params) => {
      console.log('Route params changed:', params);
      if (params['id']) {
        this.selectedHikeId = +params['id']; // Convertir en nombre
        console.log('Selected hike ID updated:', this.selectedHikeId);
      } else {
        this.selectedHikeId = null;
        console.log('Selected hike ID cleared');
      }
    });
  }

  selectHike(hike: Hike) {
    console.log('CardsList: Selecting hike:', hike.id);
    this.selectedHikeId = hike.id;
    this.router.navigate(['/hike', hike.id]);
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
