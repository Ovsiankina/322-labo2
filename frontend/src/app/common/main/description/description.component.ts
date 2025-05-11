import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  // Ajoute les imports Angular Material nécessaires ici
})
export class DescriptionComponent {
  @Input() hike: any; // Typage à affiner selon ton modèle
}
