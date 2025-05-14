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
    this.hikeService.getAllHikes().subscribe({
      next: (data) => {
        this.hikes = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des randonnées:', error);
      },
    });

    // Si nous sommes en mode détail, récupérer l'ID de la randonnée sélectionnée
    if (this.isDetailView) {
      this.route.params.subscribe((params) => {
        this.selectedHikeId = +params['id'];
      });
    }
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
