import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private hikeService: HikeService) {}

  ngOnInit() {
    this.hikeService.getAllHikes().subscribe({
      next: (data) => {
        this.hikes = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des randonnées:', error);
      },
    });
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
