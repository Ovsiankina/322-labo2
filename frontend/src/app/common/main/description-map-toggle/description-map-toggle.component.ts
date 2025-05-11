import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { map } from 'rxjs';

@Component({
  selector: 'app-description-map-toggle',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './description-map-toggle.component.html',
  styleUrls: ['./description-map-toggle.component.scss'],
})
export class DescriptionMapToggleComponent {
  selectedTab: 'description' | 'map' = 'description';
  @Output() selectedChange = new EventEmitter<string>();

  select(tab: 'description' | 'map') {
    if (this.selectedTab !== tab) {
      this.selectedTab = tab;
      this.selectedChange.emit(tab);
    }
  }
}
