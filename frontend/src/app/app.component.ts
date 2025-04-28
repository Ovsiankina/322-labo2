import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InsertionService } from './services/insertion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatInputModule],
  template: `
    <mat-toolbar color="primary">
      <span>Mon Application</span>
      <span class="spacer"></span>
      <button mat-icon-button (click)="onInsert()">
        <mat-icon>add</mat-icon>
      </button>
    </mat-toolbar>
    <div class="content">
      <!-- Votre contenu ici -->
    </div>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
      .content {
        padding: 20px;
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private insertionService: InsertionService) {}

  ngOnInit() {
    // S'abonner aux événements d'insertion
    this.subscription = this.insertionService.insertion$.subscribe((data) => {
      console.log('Nouvelle insertion détectée:', data);
      // Mettre à jour votre interface ici
    });
  }

  onInsert() {
    this.insertionService.emitInsertion({
      type: 'comment',
      action: 'create',
      data: {
        body: 'Nouveau commentaire',
        createdAt: new Date(),
      },
      metadata: {
        priority: 'medium',
      },
    });
  }

  ngOnDestroy() {
    // Nettoyer l'abonnement lors de la destruction du composant
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
